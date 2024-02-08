import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';


export default function DeleteProfile() {
    let id=sessionStorage.getItem("uid")
    const [teachers, setTeachers] = useState({})
    function Delete(){
        //useEffect(()=>{
            axios
            .delete("http://localhost:5099/api/Teacher/deleteTeacherById/"+id)
            .then((response)=>{
                console.log(response.data);
                setTeachers(response.data);
                alert("Deleted Successfully")
              })
              .catch((error)=>{
                console.log(error);
        });
       //  },[]);
    }
  return (
    <div>
         <label for="teacherId">TeacherId</label>
        <input type="text" id='teacherId' placeholder='enter the id' value={teachers.teacherId } onChange={(e)=>setTeachers(e.target.value)} />
        <button onClick={Delete}>Delete</button>
    </div>
  )
}
