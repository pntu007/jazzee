const Product = require('../model/productModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllProduct = catchAsync(async(req,res,next)=>{
    const products = await Product.find();
    console.log(products);

    if(!products) return next(new AppError('No product found!',404));

    res.status(200).json({
        status : 'success',
        data : {products}
    });
});

exports.createProduct = catchAsync(async(req,res,next)=>{
    console.log(req.body);
    const newProduct = await Product.create(req.body);

    res.status(201).json({
        status : 'success',
        data : {product : newProduct}
    });
});