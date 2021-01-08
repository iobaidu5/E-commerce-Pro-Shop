import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import productRoutes from './routes/productRoutes';

const app = express();

dotenv.config(); 

connectDB();

app.get('/', (req,res) => {
    res.send("API Running");
});

app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("Server on"));
