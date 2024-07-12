import Product from '../model/productModel.js'
import asyncHandler from 'express-async-handler'
//step 2
//this is where we are writing rest apis to query data
const getProducts = async(req,res) => {
    const products = await Product.find()
    res.status(200).json(products)
}

// const getProductById = async(req,res) => {
//     const id = req.params.id
//     const product = await Product.findById(id)
//     res.status(200).json(product)
// } getting products using the id assigned by mongo db

const getProductById = asyncHandler(async(req,res) => {
    const id = req.params.id
    const product = await Product.findOne({'productId':id})
    if(!product){
        res.status(400)
        throw new Error(`Product with ${id} not found`)
    }
    res.status(200).json(product)
})

const createProduct = asyncHandler(async(req,res) => {
    const {productName,price,starRating,productAvailable,imageUrl,productCode,productId} = req.body
    if(!productName || !price || !productId){
        res.status(400)
        throw new Error('Please provide the product details')
    } 
    const product = await Product.create({productId,productName,productCode,productAvailable,price,imageUrl,starRating})
    res.status(201).json(product)//status is 201 for creating or adding 
})

const updateProduct = asyncHandler(async(req,res) => {
    const id = req.params.id
    const product = await Product.findByIdAndUpdate(id,req.body)
    if(!product){
        throw new Error('Please provide the product details')
    }

    res.status(200).json(product)//status is 201 for creating or adding 
})

const deleteProduct = asyncHandler(async(req,res) => {
    const id = req.params.id
    
    
    const product = await Product.findById(id)
    if(!product){
        res.status(404)
        throw new Error('product deletion failed')
    }
    
    await Product.findByIdAndDelete(id)
    res.status(200).json({msg:`Product Removed with id ${id}`})//status is 201 for creating or adding 
})

export default {getProducts,getProductById,createProduct,updateProduct,deleteProduct}