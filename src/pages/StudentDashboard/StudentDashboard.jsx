import React, { useEffect, useState } from 'react'
import Pills from './TopButtons'
import { Link } from 'react-router-dom'
export default function YouPage() {
  const [studens,getStudents] = useState([])
  useEffect(()=>{
    
  })
  return ( 
    <div>
      <Pills/>
      <div>
      <div class="px-4 py-5 my-2 text-center">

    <h1 class="display-5 fw-bold text-body-emphasis">Welcome UserName</h1>
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
                    </tr>
                    <tr>
                        <td>class</td>
                    </tr>
                    <tr>
                        <td>sec</td>
                    </tr>
                    <tr>
                        <td>email</td>
                    </tr>
                    <tr>
                        <td>phone</td>
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