require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require("path");

const userRouter = require('./api/users/user.router');
const shopRouter = require('./api/shops/shop.router');
const adminRouter = require('./api/admin/admin.router');
const categoryRouter = require('./api/categories/category.router');
const productRouter = require('./api/products/product.router');
const orderRouter = require('./api/orders/order.router');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/uploads', express.static('uploads'));

app.use('/api/users', userRouter);
app.use('/api/shops', shopRouter);
app.use('/api/admin', adminRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);



app.listen(3005, () => {
    console.log('server up and running...');
});