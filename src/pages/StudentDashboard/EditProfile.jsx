import axios from 'axios'
import React, { useState } from 'react'

export default function EditProfile() {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
function Edit(){
    let std={
        
        eMail: email,
        number: phone,
  
    }
    axios
    .post("http://localhost:5099/api/Student/Edit_Student",std)
    .then((res)=>{
        console.log(res.data);
    })
}
  return (
    <div>
        <h1>Edit Profile</h1>
        <table>
            <tbody>
                <tr>
                    <td>Email:</td>
                    <td>
                        <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>
                        <input type='tel' onChange={(e)=>setPhone(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td rowSpan={2}>
                        <button onClick={Edit}>Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
