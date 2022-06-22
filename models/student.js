const { Schema, model } = require("../db-con");

const studentSchema = new Schema({
  attendees: String,
  name: String,
  adultsOnly: String,
  description: String,
  organizers: String,
});

const Students = model("Students", studentSchema);

module.exports = Students;
