import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import StudentService from '../services/ApiServices';

const AddStudent = () => {
  let history = useHistory();
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",  
    gender: "",
    contact: "",
    address: ""
  });

  const { id, name, age, gender, contact, address } = student;
  const onInputChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    const studentObj = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        contact: contact,
        address: address
    }
    await StudentService.createStudent(studentObj);
    window.location.replace('/');
  };

  const goBack = (e) => {
    window.location.replace('/');
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Id"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
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
                <option selected>Gender</option>
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
          <button className="btn btn-primary btn-block">Add Student</button>
          <button className="btn btn-warning btn-block" onClick={e => goBack(e)}>Go Back</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;