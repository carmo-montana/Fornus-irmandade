import 'dotenv/config';
import express, { request, response } from 'express'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});


app.listen(process.env.PORT, () => {
    console.log('Servidor está funcionando!')
})
