const { Schema, model } = require("../db-con");

const studentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String },
  gender: { type: String },
  contact: { type: String },
  address: {type: String}
});

const Students = model("Students", studentSchema);

module.exports = Students;
