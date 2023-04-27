const { Schema, model } = require("mongoose");

const CompanySchema = new Schema({
  _id: {type: Number, required: true},
  name: {type: String, required: true},
  url: {type: String, required: true},
})

const CompanyModel = model("companies", CompanySchema);

module.exports = CompanyModel;