import React, { useState, useEffect } from "react";
import StudentService from '../services/ApiServices';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const UpdateStudent = () => {
  let history = useHistory();
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    age: "",  
    gender: "",
    contact: "",
    address: ""
  });

  const { name, age, gender, contact, address } = student;

  const onInputChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudent();
  }, []);

  
  const loadStudent = async () => {
    const result = await StudentService.getStudentById(id);
    setStudent(result.data);
    console.log(result.data);
  }; 
  console.log(student._id);

  const onSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/students/${student.id}`);
    window.location.replace('/');
  };
  
  const goBack = (e) => {
    window.location.replace('/');
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Student - {student.name}({student.id})</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Id"
              name="id"
              value={student.id}
              onChange={e => onInputChange(e)}
              disabled = {true}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Age"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Gender"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <div class="input-group input-group-lg">
            <select class="custom-select" id="inputGroupSelect01" name="gender" value={gender} onChange={e => onInputChange(e)}>
                <option selected>Choose Gender...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="I prefer not to say">I prefer not to say</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Contact"
              name="contact"
              value={contact}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Update Student</button>
          <button className="btn btn-warning btn-block" onClick={e => goBack(e)}>Go Back</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;