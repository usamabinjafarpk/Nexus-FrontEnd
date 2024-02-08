import React, { useRef, useState } from 'react';
import axios from 'axios'
import './Lstyle.css';
import { Link, useNavigate } from 'react-router-dom';

const Login= () => {
  
  const userRef=useRef()
    const passRef=useRef()
    const navigate=useNavigate()
    
// function Log(){
//     axios
//     .get("http://localhost:5099/api/Users/GetAllUsers")
//     .then((res)=>{

//         let isValid=false
//         for(let i=0;i<res.data.length;i++)
//         {
//             if(res.data[i].userName==userRef.current.value && res.data[i].password==passRef.current.value){
//                 isValid=true
//                 sessionStorage.setItem("uname",res.data[i].userName)
//                 sessionStorage.setItem("uid",res.data[i].userId)
//                 sessionStorage.setItem("role",res.data[i].role)
//                 break;
//             }
//             else{
//                 isValid=false
//             }
//         }
//         if(isValid){
//           let role=sessionStorage.getItem("role")
//                 console.log("Success");
//                 if(role=="student")
//                 navigate("/studdashboard")
//                 else if(role=="teacher")
//                 navigate("/teacherdashboard")

//         }
//         else{
//             console.log("Failed");
//         }

        
// })
// }


const [user, setUser] = useState({ username: "", password: "" });
const [err, setErr] = useState("");
const Validate = (e) => {
  // e.preventDefault();
  axios
    .post("http://localhost:5099/api/Users/Log_in", user)
    .then((response) => {
      console.log(response.data);
      let validUser = response.data;
      if (validUser != null) {
        //set username in sessionstorage
        sessionStorage.setItem("uid", validUser.userId);
        sessionStorage.setItem("token", validUser.token);
        if (validUser.role === "Admin") {
          navigate("/admin-dashboard");
        } else if (validUser.role === "Student") {
          navigate("/studdashboard");
        } else if (validUser.role === "Teacher") {
          navigate("/teacherdashboard");
        }
      } else {
        setErr("Invalid User Credentials");
      }
    })
    .catch((err) => console.log(err));
};


  return (
    
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Login</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae pariatur qui quos aspernatur, voluptatem autem possimus esse quo consequatur omnis, soluta consectetur ullam ipsum cum!</p>
            </div>
        </header>
        <div className='bg-dark text-light p-5'>
            <div className='container'>
            <div className='containerlog'>
                <h2 className='text-center mb-5'></h2>
                
     
     <div className="cover">
       <div className="front">
         {/* <img src="../../utiles/images/frontImg.jpg" alt="Front Image" /> */}
         <div className="text">
           <span className="text-1">Every new friend is a <br /> new adventure</span>
           <span className="text-2">Let's get connected</span>
         </div>
       </div>
       <div className="back backImg">
         {/* <img src="images/backImg.jpg" alt="Back Image" className="backImg" /> */}
         <div className="text">
           {/* <span className="text-1">Complete miles of journey <br /> with one step</span>
           <span className="text-2">Let's get started</span> */}
         </div>
       </div>
     </div>

     
     <div className="forms">
       <div className="form-content">
         <div >
           <div className="title">Login</div>
           {/*<form action="#">*/}
             <div className="input-boxes">
               <div className="input-box">
                 <i className="fas fa-envelope"></i>
                 <input type='text' placeholder="Enter your Username" value={user.username}
                onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    username: e.target.value,
                  }))
                } required />
               </div>
               <div className="input-box">
                 <i className="fas fa-lock"></i>
                 <input type="password" placeholder="Enter your password" value={user.password}
                onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    password: e.target.value,
                  }))
                } required />
               </div>
               <div className="text">
                 <a href="#">Forgot password?</a>
               </div>
               <div className="button input-box">
                 {/* <input type="submit" value="Submit" /> */}
                 <button  onClick={Validate}>Login</button>
               </div>
               <Link to="/studregister">
               <div className="text ">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
               </Link>
             </div>
           {/* </form> */}
         </div>

         {/* <div className={isLoginForm ? "signup-form" : "signup-form active-form"}>
           <div className="title">Signup</div>
           <form action="#">
             <div className="input-boxes">
               <div className="input-box">
                 <i className="fas fa-user"></i>
                 <input type="text" placeholder="Enter your name" required />
               </div>
               <div className="input-box">
                 <i className="fas fa-envelope"></i>
                 <input type="text" placeholder="Enter your email" required />
               </div>
               <div className="input-box">
                 <i className="fas fa-lock"></i>
                 <input type="password" placeholder="Enter your password" required />
               </div>
               <div className="button input-box">
                 <input type="submit" value="Submit" />
               </div>
               <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
             </div>
           </form>
         </div> */}
       </div>
            </div>
        </div>
    
    {/* <div className="container"> */}
     
      </div>
    </div>
    </div>
  );
};

export default Login;