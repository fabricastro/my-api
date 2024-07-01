const express = require('express');
const productServices = require('../services/servicesProducts')
const router = express.Router()
const validatorHandler = require('../middleware/validator.handler')
const { schemaProductCreate, updateSchemaProduct, getProductsSchema } = require('../schema/schemaProduct')
router.get('/', async (req, res, next) => {
    try {
        const products = await productServices.getAllProducts(req, res)
        res.json(products)
    } catch (error) {
        next(error)
    }

})

router.get('/:id', validatorHandler(getProductsSchema, 'params'),
    async (req, res) => {
    const getOneProduct = await productServices.getOneProduct(req, res)
    return getOneProduct
})

router.post('/', async (req, res) => {
    const createProduct = await productServices.createNewProduct(req, res)
    return createProduct
})

router.patch('/:id', async (req, res) => {
    const updateProduct = await productServices.updateProduct(req, res)
    res.json(updateProduct)
})

router.delete('/:id', async (req, res) => {
    const updateProduct = await productServices.updateProduct(req, res)
    return updateProduct
})

module.exports = router