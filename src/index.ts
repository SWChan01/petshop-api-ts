import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import petsRoutes from './routes/pets.routes'
import authRoutes from './routes/auth.routes'
import custRoutes from './routes/cust.routes'
import servRoutes from './routes/serv.routes'
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {version} from '../package.json'

// Base settings
dotenv.config();
const app = express();
const PORT = process.env.API_PORT || 3000;
app.use(cors({origin: process.env.FRONT_END_URL}))
app.use(express.json());
const swaggerOptions ={
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Petshop API",
            version: version,
            description: 'Petshop API Documentation'
        }
    },
    apis: ['./dist/routes/*.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Routes setting
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/pets', petsRoutes);
app.use('/auth', authRoutes);
app.use('/customers', custRoutes);
app.use('/services', servRoutes);

// Initialize the API
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
