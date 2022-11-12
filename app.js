const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require("cors")
const BodyParser = require('body-parser')

app.use(BodyParser.json());
app.use(BodyParser.urlencoded());
app.use(cors());

const routes = require('./routes/routes');
app.set("base", process.env.API_PREFIX);
app.use(`/${process.env.API_PREFIX}`, routes);


app.listen(port,()=>{
console.log(`listening on port ${port}`)
});