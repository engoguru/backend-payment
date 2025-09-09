import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/connectDB.js';
import cors from 'cors';
const PORT = process.env.PORT || 5005;
import paymentRoutes from './routes/paymentRoutes.js';


const app = express();

//  db connect
connectDB()
app.use(cors());
 app.use(express.json());

app.get('/payhealth', (_,res)=>res.json({ok:true, service:'pay-service'}));
app.use('/payment', paymentRoutes);
// app.use(notFound); app.use(errorHandler);

// await mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/users');

app.listen(PORT, ()=> console.log(`payment-service :${PORT}`));
