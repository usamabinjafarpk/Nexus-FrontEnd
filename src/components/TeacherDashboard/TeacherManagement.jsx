import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TeacherManagement = () => {
const [teachers, setTeachers] = useState([]);
const [teacherId,setTeacherId]=useState('');
const [teacherFirstName,setTeacherFirstName]=useState('');
const [teacherLastName,setTeacherLastName]=useState('');
/* const [dateOfBirth,setDateOfBirth]=useState(''); */
const [teacherGender,setTeacherGender]=useState('');
const [teacherSubjectTaught,setTeacherSubjectTaught]=useState('');
const [teacherEmail,setTeacherEmail]=useState('');
const [teacherPhone,setTeacherPhone]=useState('');
const [teacherAddress,setTeacherAddress]=useState('')
const [teacherClass,setTeacherClass]=useState([])
 
//   useEffect(() => {
//     fetchTeachers();
//   }, []);
 
//   const fetchTeachers = () => {
// axios.get("http://localhost:5232/api/Teacher/getAllExistingTeachers")
//       .then(response => {
//         console.log(response.data);
//         setTeachers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching teachers:', error);
//       });
//   };
 
  const addTeacher = () => {
    let teacher={
        teacherId:teacherId,
        teacherFirstName:teacherFirstName,
        teacherLastName:teacherLastName,
        //dateOfBirth:dateOfBirth,
        teacherGender:teacherGender,
        teacherSubjectTaught:teacherSubjectTaught.split(', '),
        teacherEmail:teacherEmail,
        teacherPhone:teacherPhone,
        teacherAddress:teacherAddress,
        teacherClass:teacherClass,    
    };
axios.post("http://localhost:5099/api/Teacher", teacher)
      .then((response) => {
        console.log(response.data);
        // fetchTeachers();
      })
      .catch(error => {
        console.error('Error adding teacher:', error);
      });
  };
 
//   const updateTeacher = () => {
//     let teacher={
//         teacherId:teacherId,
//         teacherFirstName:teacherFirstName,
//         teacherLastName:teacherLastName,
//         //dateOfBirth:dateOfBirth,
//         teacherGender:teacherGender,
//         teacherSubjectTaught:teacherSubjectTaught.split(', '),
//         teacherEmail:teacherEmail,
//         teacherPhone:teacherPhone,
//         teacherAddress:teacherAddress,
//         teacherClass:teacherClass,    
//     };
 
// axios.put("http://localhost:5232/api/Teacher/updatingTeachersById", teacher)
//       .then((response) => {
//         console.log(response.data);
//         fetchTeachers();
//         // Refresh the list after updating
//       })
//       .catch(error => {
//         console.error('Error updating teacher:', error);
//       });
//   };
 
//   const deleteTeacher = () => {
// axios.delete("http://localhost:5232/api/Teacher/deleteTeacherById/" +teacherId)
//       .then((response) => {
//         console.log(response.data);
//         fetchTeachers(); // Refresh the list after deletion
//       })
//       .catch(error => {
//         console.error(`Error deleting teacher with ID ${teacherId}`, error);
//       });
//   };
 
//   const getTeacherById = () => {
// axios.get("http://localhost:5232/api/Teacher/getTeachersByTheirId" +teacherId)
//       .then(response => {
//         console.log(response.data);
//         setTeacherFirstName(response.data.teacherFirstName);
//             setTeacherLastName(response.data.teacherLastName);
//       })
//       .catch(error => {
//         console.error(`Error fetching teacher with ID ${teacherId}`, error);
//       });
//   };
 
//   const getTeachersByClass = () => {
// axios.get("http://localhost:5232/api/Teacher/byClass/" +teacherClass)
//       .then(response => {
//         console.log(response.data); // Handle the response as needed
//         setTeacherId(response
//             .data.teacherId);
//             setTeacherFirstName(response.data.teacherFirstName);
//             setTeacherLastName(response.data.teacherLastName);
//       })
//       .catch(error => {
//         console.error(`Error fetching teachers for class ${teacherClass}:`, error);
//       });
//   };
 
//   const getTeachersBySubject = (teacherSubject) => {
// axios.get("http://localhost:5232/api/Teacher/bySubject/"+teacherSubject)
//       .then(response => {
//         console.log(response.data);
//         setTeacherFirstName(response.data.teacherFirstName);
//         setTeacherLastName(response.data.teacherLastName);
//       })
//       .catch(error => {
//         console.error(`Error fetching teachers for subject ${teacherSubject}:`, error);
//       });
//   };
 
  return (
    <div className="container mt-5">
        {/* <form onSubmit={addTeacher}> */}
      <h1 className="mb-4">Teacher Management</h1>
      <div className="mb-4">
        <h2>Add New Teacher</h2>
        {/* Input fields for adding a new teacher */}
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="ID"
              value={teacherId}
              onChange={e => setTeacherId( e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="First Name"
              value={teacherFirstName}
              onChange={e => setTeacherFirstName( e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Last Name"
              value={teacherLastName}
              onChange={e => setTeacherLastName( e.target.value )}
            />
          </div>
          {/* <div className="col-md-3">
            <input
              type='date'
              className="form-control mb-2"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={e => setDateOfBirth( e.target.value )}
            />
          </div> */}
        </div>
        {/* Radio buttons for Gender */}
        <div className="row">
          <div className="col-md-3">
            Gender:
            <label className="ml-2 mr-2">
              <input
                type="radio"
                value="Male"
                checked={teacherGender === "Male"}
                onChange={e => setTeacherGender(e.target.value )}
              />
              Male
            </label>
            <label className="ml-2 mr-2">
              <input
                type="radio"
                value="Female"
                checked={teacherGender === "Female"}
                onChange={e => setTeacherGender( e.target.value )}
              />
              Female
            </label>
            {/* <label className="ml-2 mr-2">
              <input
                type="radio"
                value="Other"
                checked={newTeacher.teacherGender === "Other"}
                onChange={e => setTeacherGender({  e.target.value )}
              />
              Other
            </label> */}
          </div>
          {/* Dropdown menu for Subject Taught */}
          <div className="col-md-3">
            <label htmlFor="subjectTaught">Subject Taught:</label>
            <select
              id="subjectTaught"
              className="form-control"
              value={teacherSubjectTaught}
              onChange={e => setTeacherSubjectTaught( e.target.value )}
            >
              <option value="">Select a subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="Social Science">Social Science</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Email"
              value={teacherEmail}
              onChange={e => setTeacherEmail( e.target.value )}
            />
          </div>
          <div className="col-md-3">
            <input
              type="tel"
              className="form-control mb-2"
              placeholder="Phone"
              value={teacherPhone}
              onChange={e => setTeacherPhone( e.target.value )}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              className="form-control mb-2"
              placeholder="Enter address"
              value={teacherAddress}
              onChange={e => setTeacherAddress( e.target.value )}
            />
          </div>
          <div className="col-md-2">
            <select
              className="form-control"
              value={teacherClass}
              onChange={e => setTeacherClass( e.target.value )}
            >
              <option value="">Class</option>
              <option value="Class A">Class A</option>
              <option value="Class B">Class B</option>
              <option value="Class C">Class C</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <button className="btn btn-primary mr-2" onClick={addTeacher}>Add Teacher</button>
        {/* <button className="btn btn-sm btn-primary mr-2" onClick={updateTeacher}>Update</button>
                  <button className="btn btn-sm btn-danger mr-2" onClick={deleteTeacher}>Delete</button>
                  <button className="btn btn-sm btn-info" onClick={getTeacherById}>Details</button>
                  <button className="btn btn-sm btn-info" onClick={getTeachersByClass}>Details</button>
                  <button className="btn btn-sm btn-info" onClick={getTeachersBySubject}>Details</button> */}
      </div>
       {/* </form> */}
      <div>
        <h2>Existing Teachers</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Subject Taught</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Class</th>
              
            </tr>
          </thead>
          <tbody>
            
            {teachers.map((teacher)=>{
                return(
                <tr key={teacher.teacherId}>
                <td>{teacher.teacherId}</td>
                <td>{teacher.teacherFirstName} {teacher.teacherLastName}</td>
                {/* <td>{teacher.dateOfBirth}</td> */}
                <td>{teacher.teacherGender}</td>
                <td>{teacher.teacherSubjectTaught}</td>
                <td>{teacher.teacherEmail}</td>
                <td>{teacher.teacherPhone}</td>
                <td>{teacher.teacherAddress}</td>
                <td>{teacher.teacherClass}</td>
                </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </div>
   
  );
};
 
export default TeacherManagement;