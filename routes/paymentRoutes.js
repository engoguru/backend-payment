import express from 'express';
const paymentRoutes = express.Router();
import paymentControllers from '../controllers/paymentControllers.js';



paymentRoutes.post('/createPayment', paymentControllers.createPayment);

export default paymentRoutes

















