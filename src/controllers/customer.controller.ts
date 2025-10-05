import db from '../database/database';
import type { Response, Request } from 'express';


// Lists all created customers
export const listCustomers =  (req: Request, res: Response) => {
    try {
        db.query('SELECT * FROM customers', (err, result) => {
            if(err) return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
            return res.status(200).json({Message: 'CUSTOMERS_LISTED', Content: result})
        })
    } catch (err) {
        console.log(err) 
        return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
    }
}

// Create a new customer
export const createCustomer = async (req: Request, res: Response) => {
    const {name, phone, address, email} = req.body;
    try {
        db.query('INSERT INTO customers(name, phone, address, email) VALUES(?, ?, ?, ?)', [name, phone, address, email], (err, result) => {
            if (err) return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});

            return res.json({Message: 'CUSTOMER_CREATED', Content: result})
        })
    } catch (err) {
        console.log(err) 
        return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
    } 
}

// Show a specific customer 
export const detailCustomer = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        db.query('SELECT * FROM customers WHERE customers.id = ?', [id], (err, result) => {
            if(err) return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
            if(result.length === 0) return res.status(404).json({Message: 'CUSTOMER_NOT_FOUND'});

            return res.json(result[0]);
        })
    } catch (err) {
        console.log(err) 
        return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
    }
}

// Edit a specific customer
export const updateCustomer = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        db.query('SELECT * FROM customers WHERE customers.id = ?', [id], (err, row) => {
            if (err) return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
            if(row.length === 0) return res.status(404).json({Message: 'CUSTOMER_NOT_FOUND'});
        })
    } catch (err) {
        console.log(err) 
        return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
    }
}

// Delete a specific customer
export const deleteCustomer = async (req: Request, res: Response) => {
    const customerId = req.params.id;
    const {deletePets} = req.body;

    try {
        if(deletePets) await db.query('DELETE FROM pets WHERE customer_id = ?', [customerId]);
        await db.query('DELETE FROM customers WHERE id = ?', [customerId], (err, result) => {
            if (err) return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});

            return res.json({Message: 'CUSTOMER_DELETED', Content: result});
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({Message: 'INTERNAL_ERROR', Error: err});
    }
}