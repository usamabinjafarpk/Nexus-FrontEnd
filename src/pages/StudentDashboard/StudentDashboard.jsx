import React, { useEffect, useState } from 'react'
import Pills from './TopButtons'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function YouPage() {
  const [students,setStudents] = useState([])
  
  let username=sessionStorage.getItem("uname")
  let userId=sessionStorage.getItem("uid")

  useEffect(() => {
    axios
    .get("http://localhost:5099/api/Student/Get_student_by_id"+userId)
    .then((res)=>{
      setStudents(res.data)
      console.log(students);
    })
  
  }, [])
  

  return ( 
    <div>
      <Pills/>
      <div>
      <div class="px-4 py-5 my-2 text-center">

    <h1 class="display-5 fw-bold text-body-emphasis">Welcome {username}</h1>
    <div class="col-lg-6 mx-auto">  
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div
            class="table-responsive"
        >
            <table
                class="table table-primary"
            >
               
                <tbody>
                    <tr class="">
                        <td scope="row">Name</td>
                        <td>{students.fName+" "+students.lName}</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>{students.clss}</td>
                    </tr>
                    <tr>
                        <td>sec</td>
                        <td>{students.section}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{students.eMail}</td>
                    </tr>
                    <tr>
                        <td>phone</td>
                        <td>{students.number}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/editprofile">
            <button>Edit Details</button>
            </Link>
        </div>
                    
      </div>
    </div>
  </div>
      </div>
    </div>
  )
}