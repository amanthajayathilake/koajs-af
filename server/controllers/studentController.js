const Students = require("../models/student");

exports.getStudents = async ctx => {
  try {
    const std = await Students.find({})
    if (std) {
        ctx.body = std;
        // ctx.body = "Success!";
    } else {
        throw new Error('Unable to fetch list of Students')
    }
  } catch (err) {
    ctx.throw(422)
  }
}

exports.addStudent = async ctx => {
    try {
      const std = await new Students(ctx.request.body).save();
      ctx.body = "Success!";
      ctx.body = std
    } catch (err) {
      ctx.throw(422)
    }
}

exports.getStudent = async ctx => {
    try {
      const id = ctx.params.id
      const std = await Students.findById(id)
      ctx.body = "Success!";
      ctx.body = std
    } catch (err) {
      ctx.throw(422)
    }
}


exports.updateStudent = async ctx => {
    try {
      const id = ctx.params.id
      const data = ctx.request.body
      const std = await Students.findByIdAndUpdate({_id: id}, data, {new: true})
      ctx.body = "Success!";
      ctx.body = std
    } catch (err) {
      ctx.throw(422)
    }
}

exports.deleteStudent = async ctx => {
    try 
      {
      const id = ctx.params.id      
      const std = await Students.findByIdAndRemove({_id: id})
      ctx.body = "Success!";
      ctx.body = std;
      ctx.response.status = 200
    } catch (err) {
        ctx.throw(422)
    }
}

// const parse = require('co-body');

// const getStudents = async (ctx) => {
//   try {
//     const results = await Students.find();
//     ctx.body = results;
//     ctx.status = 200;
//   } catch (e) {
//     console.log(e);
//     ctx.status = 500;
//     throw e;
//   }
// };

// const addStudent = async (ctx) => {
//   try {
//     await Students.create(ctx.request.body);
//     ctx.body = "Student added to the system!";
//     ctx.status = 201;
//   } catch (e) {
//     console.log(e);
//     ctx.status = 500;
//     throw e;
//   }
// };

// const getStudent = async (ctx) => {
//   const { id } = ctx.params;
//   try {
//     const student = await Students.findById(id).exec();
//     if (!student) {
//       ctx.status = 404;
//       return;
//     }
//     ctx.body = student;
//   } catch (e) {
//     console.log(e);
//     ctx.status = 500;
//     throw e;
//   }
// };

// const updateStudent = (ctx) =>{
//   const filter = {id: ctx.params.id || 'invalidId'};
//   const statusDetails = {
//       name: ctx.request.body.name,
//       age: ctx.request.body.age,
//       gender: ctx.request.body.gender,
//       contact: ctx.request.body.contact,
//       address: ctx.request.body.address
//   }
//   Students.findByIdAndUpdate(filter, statusDetails, (error, reservationDetails) =>{
//     console.log(filter)
//     console.log(ctx.request.body.id)
//       !reservationDetails ?
//       ctx.status = 404:
//       ctx.status = 200 
//   });   
// }

// const deleteStudent = (ctx) => {
//   const { id } = ctx.params;
//   try {
//     Students.findByIdAndRemove(id, (result) => {
//       console.log(result); 
//     })
//   } catch (e) {
//     ctx.status = 500;
//     throw e;
//   }
// };

// module.exports = {
//   getStudents,
//   addStudent,
//   getStudent,
//   updateStudent,
//   deleteStudent
// };
