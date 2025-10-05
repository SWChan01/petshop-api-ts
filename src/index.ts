import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes'
import cookieParser from 'cookie-parser';

// Base settings
dotenv.config();
const app = express();
const PORT = process.env.API_PORT || 3000;
app.use(cors({origin: process.env.FRONT_END_URL}))
app.use(express.json());
app.use(cookieParser());

// Routes setting
app.use('/api/v1', apiRoutes)

// Initialize the API
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
