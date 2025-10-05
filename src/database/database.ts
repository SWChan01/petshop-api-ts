import mysql from 'mysql';
import dotenv from 'dotenv'
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

const db = () => {
    connection.connect(function(err) {
        if(err) {
            console.error('Error during connecting to database: ', err.message);
            return
        }
        console.log('Connected to database as:', connection.threadId);
    })
}

db()

export default connection;