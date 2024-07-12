import express from "express";
import cors from 'cors'

import productRoutes from './router/productRouter.js'
import connectDB from "./config/dbConfig.js";

import userRoutes from './router/userRouter.js'
import errorHandler from "./middleware/errorMiddleware.js";
const app = express()//calling the express constructor

connectDB()//connect to the database

app.use(cors())

//configuring the middleware in use
app.use(express.json())//parsing obj to json 

app.use(express.urlencoded({extended:false}))

app.use('/api/products',productRoutes)//any url ending with this is delegated to productRoutes

app.use('/api/users',userRoutes)

app.use(errorHandler)

app.listen(9999,() => console.log('server started'))
