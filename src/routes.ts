import petsRoutes from './routes/pets.routes'
import authRoutes from './routes/auth.routes'
import custRoutes from './routes/cust.routes'
import servRoutes from './routes/serv.routes'
import bookRoutes from './routes/book.routes'
import { Router } from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {version} from '../package.json'

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

const router = Router();

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
router.use('/pets', petsRoutes);
router.use('/auth', authRoutes);
router.use('/customers', custRoutes);
router.use('/services', servRoutes);
router.use('/bookings', bookRoutes);

export default router;