
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('CORS');
const fetch = require('node-fetch')

dotenv.config();
// Start up an instance of app

const app = express();

app.use(cors());

app.use(express.static('dist'));

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Setup Server

app.listen(8081, function () {
    console.log('App listening on port 8081')
})

// get

app.post("/getCord", async function (req, res) {
    const app_key = process.env.API_KEY
    const apiUrl = `http://api.geonames.org/postalCodeSearchJSON?maxRows=1&placename=${req.body.url}&username=${app_key}`
    let response = await fetch(apiUrl)
    let data = await response.json()

    console.log(data)

    const superdata = {}
    superdata.lat = data["postalCodes"][0]["lat"]
    superdata.lng = data["postalCodes"][0]["lng"]
    res.send(superdata)
})
