const { Schema, model } = require("mongoose");

const AdsSchema = new Schema({
  _id: {type: Number, required: true},
  companyId: {type: Number, required: true},
  primaryText: {type: String, required: true},
  headline: {type: String, required: true},
  description: {type: String},
  CTA: {type: String, required: true},
  imageUrl: {type: String, required: true},
})

const AdsModel = model("ads", AdsSchema);

module.exports = AdsModel;