const { Schema, model } = require("../db-con");

const studentSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: Number },
  contact: { type: String },
  address: {type: String}
});

const Students = model("Students", studentSchema);

module.exports = Students;
