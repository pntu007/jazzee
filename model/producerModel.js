const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true,'Product must have a name'],
            unique : true,
        },
        description : {
            type : String,
            required : [true,'Product must have description']
        },
        price : {
            type : Number,
            required : [true,'Product must have price']
        },
        company : {
            type : String,
            required : [true,'Product must belong to a company']
        },
        images: [String]
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;