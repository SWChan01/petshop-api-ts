import { Router } from "express";
import { listCustomers, createCustomer, detailCustomer, deleteCustomer, updateCustomer } from "../controllers/customer.controller";

const router = Router();

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Retrieve all customers
 *     tags:
 *       - Customers
 *     responses:
 *       '200':
 *         description: Successfully retrieved customer list
 *       '500':
 *         description: Internal server error
 * 
 *   post:
 *     summary: Create a new customer
 *     tags:
 *       - Customers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - address
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Customer successfully created
 *       '500':
 *         description: Internal server error
 * 
 * /customers/{id}:
 *   get:
 *     summary: Retrieve a specific customer by ID
 *     tags:
 *       - Customers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Customer found
 *       '404':
 *         description: Customer not found
 *       '500':
 *         description: Internal server error
 * 
 *   put:
 *     summary: Update a specific customer by ID
 *     tags:
 *       - Customers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Customer successfully updated
 *       '404':
 *         description: Customer not found
 *       '500':
 *         description: Internal server error
 * 
 *   delete:
 *     summary: Delete a specific customer by ID
 *     tags:
 *       - Customers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deletePets:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Customer successfully deleted
 *       '500':
 *         description: Internal server error
 */


router.get('/', listCustomers);
router.get('/:id', detailCustomer);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;