const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res)=>{
    res.send('hola desde ruta raiz')
})

app.get('/help', (req, res)=>{
    res.status(200).send('Hola desde Help')
})

app.get('/products/:id', (req, res)=>{
    res.json({
        'name' : 'Teclado',
        'price' : 2000,
        'category' : 'tecnologia'
    })
})

app.listen(port, (req, res)=>{
    console.log(`Escuchando en el puerto ${port}`);
})