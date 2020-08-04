const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
var path = require('path');
const indexRouter = require('./routes/index');
const app = express();
const port = 3000;

app.use(cors({
    origin:['http://localhost:4200' ]
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api' ,indexRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));