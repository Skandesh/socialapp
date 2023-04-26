const express = require('express');

const app = express();

const PORT =  process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.status(200).send('HEllo WOOORLD');
})



app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: "skandehs",
        follows: 355,
        followers: 23,
        date: Date.now()
    }
    res.status(200).json(instaSocial.followers);
})

app.get('/api/v1/twitter', (req, res) => {
    const instaSocial = {
        username: "skandeshh",
        follows: 100,
        followers: 100,
        date: new Date()
    }
    res.status(200).json(instaSocial);
})

app.get('/api/v1/linkedIn', (req, res) => {
    const instaSocial = {
        username: "Skandesh",
        follows: 100,
        followers: 10,
        date: new Date(new Date().toUTCString()),
    }
    res.status(200).json(instaSocial);
})

app.get('/api/v1/:parameters', (req, res) =>{
    console.dir(req.path);
    res.status(200).send(req.params.parameters);
})


app.listen(PORT, () =>{
    console.log(`Server started at ${PORT}.`);
})