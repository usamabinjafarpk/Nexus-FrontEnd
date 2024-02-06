import axios from 'axios'
import React, { useState } from 'react'

// export default function StudRegister() {
//   const [id, setId] = useState("")
//   const [fname, setFname] = useState("")
//   const [lname, setLname] = useState("")
//   const [email, setEmail] = useState("")
//   const [number, setNumber] = useState("")
//   const [dob, setDob] = useState("")
//   const [std, setStd] = useState("")
//   const [section, setSection] = useState("")


//   function Reg(){
//     let reg={
//       id: id,
//   fName: fname,
//   lName: lname,
//   eMail: email,
//   number: number,
//   dob: "2024-02-06T10:00:10.604Z",
//   clss: std,
//   section: section
//     }
//     axios.post("http://localhost:5099/api/Student/Register_student",reg)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => console.log(error));
//   }
//   return (
//     <div>
//         <h1>Register</h1>
//         <table>
//             <tr>
//                 <td>Student ID:</td>
//                 <td>
//                     <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
//                 </td>
//             </tr>
//             <tr>
//                 <td>First Name:</td>
//                 <td>
//                     <input type='text' value={fname} onChange={(e)=>setFname(e.target.value)}  />
//                 </td>
//             </tr>
//             <tr>
//                 <td>Last Name:</td>
//                 <td>
//                     <input type='text' value={lname} onChange={(e)=>setLname(e.target.value)} />
//                 </td>
//             </tr>
//             <tr>
//                 <td>Email:</td>
//                 <td>
//                     <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                 </td>
//             </tr>
//             <tr>
//                 <td>Number:</td>
//                 <td>
//                     <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
//                 </td>
//             </tr>
//             <tr>
//                 <td>Dob:</td>
//                 <td>
//                     <input type='text' value={dob} onChange={(e)=>setDob(e.target.value)} />
//                 </td>
//             </tr>
//             <tr>
//                 <td>Class:</td>
//                 <td>
//                     <input type='text' value={std} onChange={(e)=>setStd(e.target.value)} />
//                 </td>
//             </tr>
//             <tr>
//                 <td>Section:</td>
//                 <td>
//                     <input type='text' value={section} onChange={(e)=>setSection(e.target.value)} />
//                 </td>
//             </tr>
//             <tr>
//               <td rowSpan={2}>
//                 <button onClick={Reg}>Register</button>
//               </td>
//             </tr>
//         </table>
//     </div>
//   )
// }






export default function StudRegister() {
    const [id, setId] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [dob, setDob] = useState("")
  const [std, setStd] = useState("")
  const [section, setSection] = useState("")


  function Reg(){
    let reg={
      id: id,
  fName: fname,
  lName: lname,
  eMail: email,
  number: number,
  dob: "2024-02-06T10:00:10.604Z",
  clss: std,
  section: section
    }
    axios.post("http://localhost:5099/api/Student/Register_student",reg)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  }
  return (
    <div>
        <section class="h-100 bg-dark">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" class="img-fluid"
                style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}/>
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Student registration form</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" value={fname} onChange={(e)=>setFname(e.target.value)} />
                      <label class="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n1" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example8">Address</label>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example9" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example9">DOB</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example90">Pincode</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example99">Course</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example97" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example97">Email ID</label>
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg">Reset all</button>
                  <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
