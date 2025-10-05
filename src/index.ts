import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import petsRoutes from './routes/pets.routes'
import authRoutes from './routes/auth.routes'
// import routes from './routes'

dotenv.config();
const app = express();
const PORT = process.env.API_PORT || 3000;

// Base settings
app.use(cors({origin: process.env.FRONT_END_URL}))
app.use(express.json());

// Routes setting
app.use('/pets', petsRoutes)
app.use('/auth', authRoutes)

// Initialize the API
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
