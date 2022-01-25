import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    enname:  { type: String, required: false, unique: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    vnbrand: { type: String, required: false},
    category: { type: String, required: true },
    encategory: { type: String, required: false },
    subcategory: { type: String, required: false},
    model: { type: String, required: true},
    description: { type: String, required: true },
    endescription: { type: String, required: false},
    parameter: { type: String, required: true },
    enparameter: { type: String, required: false},
    video: { type: String, required: false },
    catalog: { type: String, required: false },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
