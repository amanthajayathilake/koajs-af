import React, { useState, useEffect } from "react";
import StudentService from '../services/ApiServices';
import { useHistory, useParams } from "react-router-dom";

const ViewStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    id: id,
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

  const goBack = (e) => {
    window.location.replace('/');
  };
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View Student - {student.name}({student.id})</h2>
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default" style={{width:100, fontWeight: 700}}>Id</span>
          </div>
          <input disabled={true} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={student.id}/>
        </div>

        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default" style={{width:100, fontWeight: 700}}>Name</span>
          </div>
          <input disabled={true} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={name}/>
        </div>

        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default" style={{width:100, fontWeight: 700}}>Age</span>
          </div>
          <input disabled={true} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={age}/>
        </div>

        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default" style={{width:100, fontWeight: 700}}>Gender</span>
          </div>
          <input disabled={true} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={gender}/>
        </div>

        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default" style={{width:100, fontWeight: 700}}>Contact</span>
          </div>
          <input disabled={true} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={contact}/>
        </div>

        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default" style={{width:100, fontWeight: 700}}>Address</span>
          </div>
          <input disabled={true} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={address}/>
        </div>
        <br />
        <button className="btn btn-warning btn-block" onClick={e => goBack(e)}>Go Back</button>
      </div>
    </div>
  );
};

export default ViewStudent;