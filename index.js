const express = require('express');
const apiRouter = require('./server');
const { errorLogs, handlerError } = require('./middleware/error.handler');
const app = express();
const port = 3000;

app.use(express.json())


app.get('/', (req, res)=>{
    res.send('hola desde ruta raiz')
})

apiRouter(app)

app.use(handlerError)
app.use(errorLogs)

app.listen(port, (req, res)=>{
    console.log(`Escuchando en el puerto ${port}`);
})