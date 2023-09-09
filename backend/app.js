const express = require('express');
var cors = require('cors')
const path = require('path');
require('dotenv').config();
const logger = require('morgan');

//IMPORTING ROUTES
const productRouter = require('./routes/products')
const brandRouter = require('./routes/brands')
const authRouter = require('./routes/auth');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productRouter);
app.use('/brands', brandRouter);
app.use('/', authRouter);

app.listen(3031, ()=>{ 
  console.log("IT Crowd server running in: http://localhost:3031/");
});

module.exports = app;
