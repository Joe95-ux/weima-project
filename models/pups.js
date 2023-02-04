const mongoose = require("mongoose");

const pupsSchema = new mongoose.Schema({
    photo: [],
    name: String,
    sex: String,
    age: String,
    vaccination: String,
    available: String,
    vetchecked: String,
    price: String,
    description:String,
    rating:Number
  });

  module.exports = mongoose.model("Pup", pupsSchema);