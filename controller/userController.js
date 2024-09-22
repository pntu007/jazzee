const User = require('./../model/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllUser = catchAsync(async(req,res,next)=>{
    const Users = await User.find();

    if(!Users) return next(new AppError('No User found!',404));

    res.status(200).json({
        status : 'success',
        data : {Users}
    });
});

exports.createUser = catchAsync(async(req,res,next)=>{
    const newUser = await User.create(req.body);

    res.status(201).json({
        status : 'success',
        data : {User : newUser}
    });
});