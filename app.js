const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRouter');

app.use('/', viewRouter);
app.use('/api/v1/product',productRouter);
app.use('/api/v1/user',userRouter);

module.exports = app;