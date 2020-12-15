//Using this tuturial to get my bearings https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
//Data
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

let app = express();
let port = process.env.PORT || 8080;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

let exampledata = [{name: "John", age: 25}, {name: "Mary", age: 23}]

app.get('/all-data', (req, res) => {
     res.send(exampledata);
});

app.listen(port, function () {
     console.log("Running on port " + port);
});