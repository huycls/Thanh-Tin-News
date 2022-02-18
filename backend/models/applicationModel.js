import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      like: { type: Number, default: 0 },
      comment: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
const ApplicationSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        content: {type: String, required: true},
        articletype: {type: String, required: true},
        enarticletype: {type: String, required: true},
        articlecategory: {type: String, required: true},
        entitle: {type: String, required: true},
        encontent: {type: String, required: true},
        enarticlecategory: {type: String, required: true},
        articleimage: {type: String, required: true},
        like: { type: Number, default: 0, required: true },
        numReviews: { type: Number, default: 0, required: true },
        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
);
const Application = mongoose.model('Application', ApplicationSchema);

export default Application;
