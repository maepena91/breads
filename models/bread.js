// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

// Schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "http://placehold.it/500x500.png" },
  baker: {
    type: String,
    enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
  },
});

// Model
const Bread = mongoose.model("Bread", breadSchema);

// Exports
module.exports = Bread;