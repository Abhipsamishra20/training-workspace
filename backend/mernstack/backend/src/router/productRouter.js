import express from 'express'
import productApi from '../controller/productController.js'

import secure from '../middleware/authMiddleware.js'
//step 4
const router = express.Router()

const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = productApi

router.route('/').get(secure,getProducts).post(secure,createProduct)

router.route('/:id').get(secure,getProductById).put(secure,updateProduct).delete(secure,deleteProduct)
//put and patch can be used to update the values of objects already present.
//In put request we have to provide the whole object while in patch we can provide one parameter

export default router