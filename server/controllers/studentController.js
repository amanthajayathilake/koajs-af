const Students = require("../models/student");

const getStudents = async (ctx) => {
  try {
    const results = await Students.find();
    ctx.body = results;
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    throw err;
  }
};

const addStudent = async (ctx) => {
  try {
    await Students.create(ctx.request.body);
    ctx.body = "Student added to the system!";
    ctx.status = 201;
  } catch (e) {
    console.log(err);
    ctx.status = 500;
    throw err;
  }
};

module.exports = {
  getStudents,
  addStudent,
};
