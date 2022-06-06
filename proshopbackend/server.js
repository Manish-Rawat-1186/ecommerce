import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRouter from './routes/productRouter.js'
import color from 'colors'
import { errorHandler, notFound } from './middlewave/errormiddleware.js';


dotenv.config();

connectDB()

const app = express();

app.get('/', (req, res) => {
    res.send('Api is running..')
})

app.use('/api/products', productRouter)
app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running for ${process.env.NODE_ENV} mode on ${PORT}`))