import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EditProfile() {
    let id =sessionStorage.getItem("uid")
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

      function Edit(){
        useEffect(()=>{
            axios
            .put("http://localhost:5099/api/Teacher/updatingTeachersById/"+id)
            .then((response)=>{
                console.log(response.data);
                setTeachers(response.data);
                alert("Updated Successfully")
              })
              .catch((error)=>{
                console.log(error);
        });
        },[]);
    }
  return (
    <div>
   <table className='table table-striped' border={100}>

<tbody>
    <tr>

        <td>TeacherId : </td>
        <td>
            {teachers.teacherid}
        </td>
    </tr>
    <tr>
        <td>Name : </td>
        <td>{teachers.teacherFirstName+" "+teachers.teacherLastName}</td>
    </tr>
    <tr>
        <td>Email : </td>
        <td><input type="text" value={teachers.teacherEmail} onChange={(e)=>(e.target.value)}/></td>
    </tr>
    <tr>
        <td>Phone : </td>
        {/* <td>{teachers.phone}</td> */}
        <td><input type="tel" value={teachers.teacherphone}/></td>
    </tr>
    
    <tr>
        <td>Address </td>
        
        <td><textarea value={teachers.teacherAddress}/></td>
    </tr>
    <tr>
        <td>
            <button onClick={Edit}>Edit </button>
        </td>
    </tr>
    
</tbody>
</table>
    </div>
  )
}