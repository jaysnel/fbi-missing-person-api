//Using this tuturial to get my bearings https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
//Data
let express = require('express')
let app = express();
var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Some Data here'));
app.listen(port, function () {
     console.log("Running on port " + port);
});