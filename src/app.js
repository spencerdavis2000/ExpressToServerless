const express = require('express');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

// GET req simply sends the current time
app.get('/time', (req, res) => {
    let timeNow = Date(Date.now());
    res.status(200).send(timeNow.toString());
});

// POST req logs the name and sends it
// to check send a POST req with name and check your lambda function console
app.post('/logthis', (req, res) => {
    const name = req.body.name;
    const toLog = `\n >>> My name is ${name} <<<\n`;
    console.log(toLog);
    res.status(200).send(toLog);
});

module.exports = app;
