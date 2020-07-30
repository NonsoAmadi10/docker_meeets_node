const express = require('express');

const app = express();

const PORT = 2020;

app.use(express.json())

app.get('/', function (req, res) {
    res.send({ message: 'Hello World' })
})
app.listen(PORT, function () {
    console.log(`App is running on PORT ${PORT}`)
})