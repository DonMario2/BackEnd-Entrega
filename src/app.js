import express from 'express';

const Port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded ({ extended: true}));

app.get('/produts/', (req, res) => {
    res.status(200).send({error: null, message: 'OK', data: 'test2' });
});

app.post('/', (req, rep) => {
    rep.status(200).send({ error: null, message: 'ok', data: 'statuspost'})
})

app.listen(Port, () => {
    console.log(' Server Activo')
});