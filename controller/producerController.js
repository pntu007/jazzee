const Product = require('./../model/producerModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllProduct = catchAsync(async(req,res,next)=>{
    const products = await Product.find();

    if(!products) return next(new AppError('No product found!',404));

    res.status(200).json({
        status : 'success',
        data : {products}
    });
});

exports.createProduct = catchAsync(async(req,res,next)=>{
    const newProduct = await Product.create(req.body);

    res.status(201).json({
        status : 'success',
        data : {product : newProduct}
    });
});