//General data
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//MongoDB data
const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
const username = process.env.CLUSTER_USERNAME;
const password = process.env.CLUSTER_PASSWORD;
const databasename = process.env.DATABASE_NAME;
const nameofcollection = process.env.COLLECTION_NAME;
const uri = `mongodb+srv://${username}:${password}@cluster0.suitu.mongodb.net/${databasename}>?retryWrites=true&w=majority`;
const client = new mongoclient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });

//Connection data
let app = express();
let port = process.env.PORT || 8080;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


//Return All Data
app.get('/', (req, res) => {

     let getFullList = async() => {
     //Add final list to DB
     client.connect(async(err) => {
          if(err) return catchError(err);

          const collection = await client.db(databasename).collection(nameofcollection);
          
          let data = await collection.find({"Found": false}).toArray();
          res.send(data);
          client.close();
          });
     }

     getFullList();
});





app.listen(port, function () {
     console.log("Running on port " + port);
});