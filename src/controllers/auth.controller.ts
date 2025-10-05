import bcrypt from 'bcrypt';
import db from '../database/database';
import type {Request, Response} from 'express';

const saltRounds = 10;

export const signUp = (req: Request, res: Response) => {
    const {name, email, password} = req.body;
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if(err) res.status(500).json({Error: err.message, Cause: err.cause, Where: err.code});
                
            if(results.length > 0) {return res.status(402).json({Message: 'USER_ALREADY_EXISTS'});} 
            else {
                try {
                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                    db.query('INSERT INTO users(name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, result) => {
                        if(err) res.status(500).json({Error: 'INTERNAL_ERROR', Cause: err.cause, Where: err.code});
                        return res.status(201).json({Message: 'USER_CREATED', Content: result});
                });
                } catch (err) {
                    res.status(500).json({Error: 'Error while trying to cryptograph password.'});
            }
        }
    })
}

export const login = (req: Request, res: Response) => {
    const {email, password} = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err || result.length === 0) return res.status(404).json({Error: 'USER_NOT_FOUND'});
        const user = result[0];
        const correctPassword = await bcrypt.compare(password, user.password);

        if(correctPassword) {
            res.json({Message: 'LOGIN_SUCCESS'})
        } else {
            res.status(404).json({Error: 'INVALID_PASSWORD'})
        }
    })
}
