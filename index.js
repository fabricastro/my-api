const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res)=>{
    res.send('hola desde ruta raiz')
})

app.get('/api/v1/help', (req, res)=>{
    res.status(200).send('Hola desde Help')
})

app.get('/users', (req, res)=>{
    const {limit, offset} = req.query
    if(limit && offset){
        res.json({
            limit,
            offset
        })
    } else {
        res.send('No hay ningúnn parametro')
    }
})

app.get('/products/:id', (req, res)=>{
    const {id} = req.params
    res.json({
        'id' : id,
        'name' : 'Teclado',
        'price' : 2000,
        'category' : 'tecnologia'
    })
})

app.listen(port, (req, res)=>{
    console.log(`Escuchando en el puerto ${port}`);
})