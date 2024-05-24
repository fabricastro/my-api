const faker = require('faker');


const getAllProducts = (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
    }
}

const createNewProduct = (req, res) => {
    const body = req.body
    res.json({
        ok: true,
        data: body
    })
}

const updateProduct = (req, res) => {
    try {
        const {id} = req.params
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

const deleteProduct = (res, req)=>{
    const {id} = req.params
    res.json({
        message: "delete",
        id,
    })
}

const getOneProduct = (req, res) => {
    const {id} = req.params
    res.json({
        'id' : id,
        'name' : 'Teclado',
        'price' : 2000,
        'category' : 'tecnologia'
    })
}
    
module.exports = 
{
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
}