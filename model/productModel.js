const mongoose = require('mongoose');
const slugify = require('slugify');

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
        images: [String],
        duration : {
            type : String
        },
        summary : {
            type : String
        },
        ratingsAverage: {
            type: Number,
            default: 4.5,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0'],
            set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
          },
        slug: {
            type : String,
            unique : true
        }
    }
);

productSchema.pre('save', function (next) {
    if (this.isModified('name')) {
      this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;