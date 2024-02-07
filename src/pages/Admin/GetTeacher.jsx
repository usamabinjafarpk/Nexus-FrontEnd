import axios from 'axios'
import React, { useRef, useState } from 'react'

export default function GetTeacher() {

  const idRef = useRef()
  const clsRef=useRef()
  const subRef=useRef()
  const [all, setAll] = useState([])
  function GetAll(){
    axios
    .get("http://localhost:5099/api/Teacher/getAllExistingTeachers")
    .then((res)=>{
      console.log(res.data);
      setAll(res.data)
    })
  }
  function GetById(){
    axios
    .get("http://localhost:5099/api/Teacher/getTeachersByTheirId/"+idRef.current.value)
    .then((res)=>{
      console.log(res.data);
      setAll(res.data)
    })
  }
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Enter the Id:</td>
            <td>
              <input type='text' ref={idRef}/>
            </td>
          </tr>
          <tr>
            <td>Enter the Class:</td>
            <td>
              <input type='text' ref={clsRef}/>
            </td>
          </tr>
          <tr>
            <td>Enter the Subject:</td>
            <td>
              <input type='text' ref={subRef}/>
            </td>
          </tr>
          <tr>
              <td >
                <button onClick={GetAll}>Get All Teacher</button>
              </td>
              <td>
                <button onClick={GetById}>Get Teacher By Id</button>
              </td>
          </tr>
        </tbody>
      </table>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Dob</th>
              <th>Gender</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Class</th>
            </tr>
          </thead>
            <tbody>
                {
                  all.map((item)=>{
                    return(
                      <tr>
                        <td>{item.teacherId}</td>
                        <td>{item.teacherFirstName+" "+item.teacherLastName}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>{item.teacherGender}</td>
                        <td>{item.teacherSubjectTaught}</td>
                        <td>{item.teacherEmail}</td>
                        <td>{item.teacherPhone}</td>
                        <td>{item.teacherAddress}</td>
                        <td>{item.teacherClass}</td>
                      </tr>
                    )
                  })
                }
                
            </tbody>
        </table>
    </div>
  )
}
