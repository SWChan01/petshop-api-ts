import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes'

// Base settings
dotenv.config();
const app = express();
const PORT = process.env.API_PORT || 3000;
app.use(cors({origin: process.env.FRONT_END_URL}))
app.use(express.json());


// Routes setting
app.use('/api/v1', apiRoutes)

// Initialize the API
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
