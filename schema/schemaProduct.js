const Joi = require('joi');

const name = Joi.string().alphanum().min(3).max(10)
const price = Joi.number().integer().min(10)

const schemaProductCreate = Joi.object({
    name: name.required(),
    price: price.required()
})

const updateSchemaProduct = Joi.object()