const faker = require('faker');


const getAllProducts = (req, res) => {
    const products = []
    const {size} = req.query
    const limit = size || 5
    for (let index = 0; index < limit; index++) {
        products.push({
            name:faker.commerce.productName(),
            price:parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        })
    }
    return products
}

const createNewProduct = (req, res) => {
    const body = req.body
    res.json({
        ok: true,
        data: body
    })
}

module.exports = 
{
    getAllProducts,
    createNewProduct
}