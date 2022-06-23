const Students = require("../models/student");
const parse = require('co-body');

const getStudents = async (ctx) => {
  try {
    const results = await Students.find();
    ctx.body = results;
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
    throw e;
  }
};

const addStudent = async (ctx) => {
  try {
    await Students.create(ctx.request.body);
    ctx.body = "Student added to the system!";
    ctx.status = 201;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
    throw e;
  }
};

const getStudent = async (ctx) => {
  const { id } = ctx.params;
  try {
    const student = await Students.findById(id).exec();
    if (!student) {
      ctx.status = 404;
      return;
    }
    ctx.body = student;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
    throw e;
  }
};

const updateStudent = (ctx) =>{
  const filter = {id: ctx.params.id || 'invalidId'};
  const stdObj = {
      name: ctx.request.body.name,
      age: ctx.request.body.age,
      gender: ctx.request.body.gender,
      contact: ctx.request.body.contact,
      address: ctx.request.body.address
  }
  Students.findByIdAndUpdate(filter, stdObj, (error, stdDetails) =>{
    console.log(filter)
    console.log(ctx.request.body.id)
      !stdDetails ?
      ctx.status = 404:
      ctx.status = 200 
  });   
}

// const deleteStudent = (ctx) =>{
//   const filter = {id: ctx.params.id};
//   Students.findOneAndDelete(filter, (error, stdDetails) =>{
//     !stdDetails ?
//     ctx.status = 404:
//     ctx.status = 200 
//   })
// }

// const updateStudent = async (ctx, id) => {
//   const userFromRequest = await parse(ctx)
//   await Students.findOneAndUpdate({_id: id}, userFromRequest)
//   ctx.status = 204
// }

// const deleteStudent = async (ctx, id) => {
//   await Students.remove({_id: id})
//   ctx.status = 200
// }

// const updateStudent = (ctx) => {
//   const { id } = ctx.params;
//   console.log('id',id)
//   try {
//     Students.findByIdAndUpdate(id, ctx.request.body, {new:true}, (result) => {
//       console.log(result); 
//     })
//   } catch (e) {
//     ctx.status = 500;
//     throw e;
//   }
// };

const deleteStudent = (ctx) => {
  const { id } = ctx.params;
  try {
    Students.findByIdAndRemove(id, (result) => {
      console.log(result); 
    })
  } catch (e) {
    ctx.status = 500;
    throw e;
  }
};

module.exports = {
  getStudents,
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent
};
