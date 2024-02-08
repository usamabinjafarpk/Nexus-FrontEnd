import axios from 'axios'
import React, { useState } from 'react'

export default function AddResult() {
    // const [result, setResult] = useState([]);
    // axios
    // .post("http://localhost:5099/api/Result/Add_Result"+result)
    // .then((response) => {
    //     console.log(response.data);
    //     setResult(response.data)
    //     alert("Added")
    //   })
    //   .catch((error) => console.log(error));
       const [resultId, setId] = useState("");
       const [examId, setName] = useState("");
       const [studentId, setStd] = useState("");
       const [subjectId, setSection] = useState("");
       const [mark, setMark] = useState("");
       const Add = () => {
          let marks = {
            resultId: resultId,
            examId: examId,
            studentId: studentId,
            subjectId: subjectId,
            mark:mark,
        };
    axios
      .post("http://localhost:5099/api/Result/Add_Result", marks)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    };
    

  return (
    <div>
        <table>
            <tr>
                <td>Result Id: </td>
                {/* <td><input type="text" value={result.resultId} onChange={(e)=>setResult(e.target.value)} /></td> */}
                <td><input type="text" value={resultId} onChange={(e)=>setId(e.target.value)} /></td>
            </tr>
            <tr>
                <td>Exam Id: </td>
                {/* <td><input type="text" value={result.examId} onChange={(e)=>(e.target.value)} /></td> */}
                <td><input type="text" value={examId} onChange={(e)=>setName(e.target.value)} /></td>
            </tr>
            <tr>
                <td>Student Id: </td>
                {/* <td><input type="text" value={result.studentId} onChange={(e)=>(e.target.value)} /></td> */}
                <td><input type="text" value={studentId} onChange={(e)=>setStd(e.target.value)} /></td>
            </tr>
            <tr>
                <td>Subject Id: </td>
                {/* <td><input type="text" value={result.subjectId} onChange={(e)=>(e.target.value)} /></td> */}
                <td><input type="text" value={subjectId} onChange={(e)=>setSection(e.target.value)} /></td>
            </tr>
            <tr>
                <td>Mark </td>
                {/* <td><input type="text" value={result.marks} onChange={(e)=>(e.target.value)} /></td> */}
                <td><input type="text" value={mark} onChange={(e)=>setMark(e.target.value)} /></td>
            </tr>
            <tr>
                <td><button onClick={Add}>Add</button></td>
            </tr>
        </table>
    </div>
   )

}
