import axios from 'axios'
import React, { useRef, useState } from 'react'
import SideBar from '../../utils/images/sidebar/SideBar'

export default function GetTeacher() {

  const idRef = useRef()
  const clsRef=useRef()
  const subRef=useRef()
  const [all, setAll] = useState([])
  const [item,setItem]=useState({})
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
      console.log(res.data.teacherId);
      idRef.current.value=res.data.teacherId;
      clsRef.current.value=res.data.teacherClass;
      subRef.current=res.data.teacherSubjectTaught;
    })
  }
  function GetBySub(){
    axios.get("http://localhost:5099/api/Teacher/bySubject/"+subRef.current.value)
    .then((res)=>{
      console.log(res.data);
     

    })
  }
  function GetByClass(){
    axios
    .get("http://localhost:5099/api/Teacher/byClass/"+clsRef.current.value)
    .then((res)=>{
      console.log(res.data);
      setAll(res.data)
    })
  }
  
  return (
    <div>
      {/* <SideBar/> */}
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
              <td>
                <button onClick={GetBySub}>Get Teacher By Subject</button>
              </td>
              <td>
                <button onClick={GetByClass}>Get Teacher By Class</button>
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
                      <tr key={item.teacherId}>
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
