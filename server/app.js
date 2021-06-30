
const dotenv = require('dotenv');

const express = require('express');

const app = express();

dotenv.config({path: './config.env'})

require('./db/conn');
app.use(express.json());
// const router = require('./router/auth');
app.use(require('./router/auth'));



// const user = require('./modal/userSchema');

const PORT = process.env.PORT;


const middleWare = (req, res, next) => {
    console.log('Hello my middleWare');
    next();
}

app.get('/', (req, res) => {
    res.send('Hi ... !');
})
app.get('/about-me', middleWare,  (req, res) => {
    res.send('about ... !');
})
app.get('/contact', (req, res) => {
    res.send('contact ... !');
})
app.get('/login', (req, res) => {
    res.send('login ... !');
})
app.get('/register', (req, res) => {
    res.send('register ... !');
})
app.get('/', (req, res) => {
    res.send('Hi ... !');
})


app.listen(PORT, () => {
    console.log(`i am listing at ${PORT}`);
})