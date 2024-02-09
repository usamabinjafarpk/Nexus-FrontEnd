import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function GetAllTeachers() {
    const [tea, getTea] = useState([])
        const navigate=useNavigate();
 
        useEffect(() => {
            if (sessionStorage.getItem("token") != null) {
                console.log(sessionStorage.getItem("token"));
                const header = {
                  Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                };
 
            axios
        .get("http://localhost:5099/api/Teacher/getAllExistingTeachers")
        .then((response)=>{
            console.log(response.data);
            getTea(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
   
    else{
        navigate('/login')
    }
},[]);

  return (
    <div>
        <button onClick={}>GetAllTeachers</button>
        <div className='container'>
            
         <table className='table table-stripped'>
             <thead>
                <tr>
                     <th>Teacher Id</th>
                     <th>Firstname</th>
                     <th>Lastname</th>
                     <th>DOB</th>
                     <th>Gender</th>
                     <th>Subject Taught</th>
                     <th>Email</th>
                     <th>Class</th>
                 
               </tr>
            </thead>
            <tbody>
                 {
                   tea.map((item)=>{
                        return(
                            <tr key={item.teacherid}>
                                 <td>{item.teacherid}</td>
                                <td>{item.teacherFirstName}</td>
                                <td>{item.teacherLastName}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.teacherGender}</td>
                                <td>{item.teacherSubjectTaught}</td>
                                <td>{item.teacherEmail}</td>
                                <td>{item.teacherClass}</td>
                                </tr>  
                            )
                        })
                    }
            </tbody>
        </table>
       </div> 
    </div>
  )
}

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
 
 
// const GetTeacher=()=> {
   
//         const [tea, getTea] = useState([])
//         const navigate=useNavigate();
 
//         useEffect(() => {
//             // if (sessionStorage.getItem("token") != null) {
//             //     console.log(sessionStorage.getItem("token"));
//             //     const header = {
//             //       Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//             //     };
 
//             axios
//         .get("http://localhost:5099/api/Teacher/getAllExistingTeachers")
//         .then((response)=>{
//             console.log(response.data);
//             getTea(response.data);
//         })
//         .catch((error)=>{
//             console.log(error);
//         });
   
//     // else{
//     //     navigate('/login')
//     // }
// },[]);
//   return (
//     <div className='container'>
//         <table className='table table-stripped'>
//             <thead>
//                 <tr>
//                     <th>Teacher Id</th>
//                     <th>Firstname</th>
//                     <th>Lastname</th>
//                      <th>DOB</th>
//                      <th>Gender</th>
//                      <th>Subject Taught</th>
//                      <th>Email</th>
//                      <th>Class</th>
                 
//                 </tr>
//             </thead>
//             <tbody>
//                   {
//                     tea.map((item)=>{
//                         return(
//                             <tr key={item.teacherid}>
//                                  <td>{item.teacherid}</td>
//                                 <td>{item.teacherFirstName}</td>
//                                 <td>{item.teacherLastName}</td>
//                                 <td>{item.dateOfBirth}</td>
//                                 <td>{item.teacherGender}</td>
//                                 <td>{item.teacherSubjectTaught}</td>
//                                 <td>{item.teacherEmail}</td>
//                                 <td>{item.teacherClass}</td>
                               
//                                 </tr>  
//                         )
//                     })
//                   }
//             </tbody>
//         </table>
//     </div>
//   )
//   };
//   export default GetTeacher;
 