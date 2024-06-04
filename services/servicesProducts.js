const faker = require('faker');
const boom = require('@hapi/boom');

const getAllProducts = (req, res) => {
    const price = allPrice()
    try {
        const products = []
        const { size } = req.query
        const limit = size || 5
        for (let index = 0; index < limit; index++) {
            products.push({
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            })
        }
        return products
    } catch (error) {
        console.log(error);
    }
}

const createNewProduct = (req, res) => {
    try {

        const body = req.body
        res.json({
            ok: true,
            data: body
        })
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = (req, res) => {
    try {
        const { id } = req.params
        if (id != 1){
            throw boom.notFound('producto no encontrado')
        }
        const body = req.body
        res.json({
            message: 'success',
            product: body,
            id,
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = (res, req) => {
    try {
        const { id } = req.params
        res.json({
            message: "delete",
            id,
        })
    } catch (error) {
        console.log(error);
    }
}

const getOneProduct = (req, res) => {
    try {
        const { id } = req.params
        res.json({
            'id': id,
            'name': 'Teclado',
            'price': 2000,
            'category': 'tecnologia'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports =
{
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
}