import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Profile() {
    let id=sessionStorage.getItem("uid")
    const [teachers, setTeachers] = useState({})
    useEffect(() => {
      axios
      .get("http://localhost:5099/api/Teacher/getTeachersByTheirId/"+id)
      .then((response)=>{
        console.log(response.data);
        setTeachers(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
    }, []);
    
    
  return (

    <div>
        <h2>Profile</h2>
        <table className='table table-striped' border={100}>

            <tbody>
                <tr>
                    <td>TeacherId : </td>
                    <td>{teachers.teacherid}</td>
                </tr>
                <tr>
                    <td>Name : </td>
                    <td>{teachers.teacherFirstName+" "+teachers.teacherLastName}</td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td>{teachers.teacherEmail}</td>
                </tr>
                <tr>
                    <td>Gender : </td>
                    <td>{teachers.teacherGender}</td>
                </tr>
                <tr>
                    <td>Class : </td>
                    <td>{teachers.teacherClass}</td>
                </tr>
                <tr>
                    <td>Date Of Birth : </td>
                    <td>{teachers.dateOfBirth}</td>
                </tr>
                

                
            </tbody>
        </table>
    </div>
  )
}
