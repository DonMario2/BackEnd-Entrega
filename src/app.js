import express from 'express';
import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';

const Port = 8080;
const app = express();

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


app.listen(Port, () => {
    console.log('Server Activo en localhost: ', Port)
});

//// creacion de nuevo branch