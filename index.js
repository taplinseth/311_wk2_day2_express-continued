const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;

const contacts = require("/data/contacts");
const vehicles = require("/data/vehicles");
const comments = require("/data/comments");
const products = require("/data/products");


app.use(express.static('public'));
app.use(bodyParser.json())


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
