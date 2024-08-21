const express = require('express');
const bodyParser = require('body-parser');
const { addPassenger, passengersData } = require('./passengersData');

const app = express();

app.use(bodyParser.json());


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const data = {
        userName: 'Hakan',
    };
    res.render('index', data);
})

app.get('/passengers', (req, res) => {
    res.render('passengers', { passengers: passengersData });
})

app.post('/passengers/:id', (req, res) => {
    const id = req.params.id;
    const { name, destination } = req.body;

    const newPassenger = {
        id: id,
        name: name,
        destination: destination,
    };
    addPassenger(newPassenger);

    res.json(passengersData.id);
})

app.get('/passengers/:id', (req, res) => {

    if (req.params.id >= passengersData.length) {
        res.send("bu id'e sahip bir kullanıcı yok")
    } else {
        res.render('passenger', { id: passengersData[Number(req.params.id)].id, passenger: passengersData[req.params.id] })
    }
})


app.listen(3000, () => {
    console.log('app listening on port 3000');
})