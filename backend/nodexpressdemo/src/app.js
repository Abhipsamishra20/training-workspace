import express from "express";

import productRoutes from './router/productRoutes.js'

const app = express()

//configuring the middleware
app.use(express.json())//parsing obj to json 
app.use('/ibm',productRoutes)

app.listen(9999,() => console.log('server started'))
