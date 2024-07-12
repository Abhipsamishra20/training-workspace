import express from 'express'

import products from '../model/products.js'

const router = express.Router()

router.get('/api/products', (req, res) => {
    res.json(products)
})

router.post('/api/products', (req, res) => {

    const newProduct = req.body
    if (!newProduct.productName && !newProduct.price) {
        res.status(400).json({ msg: 'Product Name or Price is mandatory' })
    }
    products.push(newProduct)
    res.json(products)
})

router.get('/api/products/:id', (req, res) => {

    const id = req.params.id

    const exists = products.some(product => product.productId === +id)
    if (exists) {

        const product = products.filter(product => product.productId === +id)[0]
        res.status(200).json(product)
    } else {

        res.json({ msg: `no product with${id} found ` })
    }
})

router.delete('/api/products/:id', (req, res) => {

    const id = req.params.id

    const productIndex = products.findIndex(product => product.productId === +id);
    if (productIndex === -1) {
        return res.status(404).send('Product not found');
    }

    products.splice(productIndex, 1);
    res.status(204).send('Product Deleted');
})

router.put('/api/products/:id', (req, res) => {

    const id = req.params.id

    const product = products.find(product => product.productId === +id)
    if (!product) {

        return res.status(404).send('Product not found')
    } 

    const {productName,price} = req.body;
    product.productName = productName || product.productName;
    product.price = price || product.price

    res.send(product);

})


export default router