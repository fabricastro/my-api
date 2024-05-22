const express = require('express');
const productServices = require('../services/servicesProducts')
const router = express.Router()

router.get('/', (req, res)=>{
    const products = productServices.getAllProducts(req, res)
    res.json(products)

})

router.get('/:id', (req, res)=>{
    const {id} = req.params
    res.json({
        'id' : id,
        'name' : 'Teclado',
        'price' : 2000,
        'category' : 'tecnologia'
    })
})

router.post('/', (req, res)=>{
    productServices.createNewProduct(req, res)
})

router.patch('/:id', (req, res)=>{
    const {id} = req.params
    const body = req.body
    res.json({
        message: 'success',
        product: body,
        id,
    })
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    res.json({
        message: "delete",
        id,
    })
})
module.exports = router