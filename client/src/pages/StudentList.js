import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentService from '../services/ApiServices';

const StudentList = () => {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await StudentService.getStudents();
    setStudent(result.data.reverse());
  };

  const deleteStudent = (id) => {
    StudentService.deleteStudent(id);
    window.location.replace('/');
  };

  return (
    <div className="container">
      <h1>Student Info</h1>
      <hr style={{border: "1px solid black"}}/>
      <a class="btn btn-primary mr-2" href={'/add'} style={{float: "right"}}>Add Student</a>
      <br />
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col" align="left">#</th>
              <th scope="col" align="center">Id</th>
              <th scope="col" align="center">Name</th>
              <th scope="col" align="center">Age</th>
              <th scope="col" align="center">Gender</th>
              <th scope="col" align="center">Contact</th>
              <th scope="col" align="center">Address</th>
              <th scope="col" align="right"></th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ?
              students.map((student, index) => (
              <tr>
                <th scope="row" align="left">{index + 1}</th>
                <td align="center">{student.id}</td>
                <td align="center">{student.name}</td>
                <td align="center">{student.age}</td>
                <td align="center">{student.gender}</td>
                <td align="center">{student.contact}</td>
                <td align="center">{student.address}</td>
                <td align="right">
                  <a class="btn btn-primary mr-2" href={`/view/${student._id}`}>
                    View
                  </a>
                  <a
                    class="btn btn-outline-primary mr-2"
                    href={`/update/${student._id}`}
                  >
                    Edit
                  </a>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteStudent(student._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            )): "No Data found"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;