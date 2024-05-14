// import React from 'react'
// import Jobs from './bt/Jobs'
// import Job from "./bt/Job";
// import {useState} from "react";

// export default function App() {
//     const [name, setName] = useState<string>("");
//     const [job, setJob] = useState<any>("");
//      const changeJob= (e: React.ChangeEvent<HTMLInputElement>) => {
//           setName(e.target.value);
//       }
//       const register = () => {
//         console.log(job);
//         let newJob={
//           name:name,
//           id:Math.floor(Math.random()*999999999),
//           satus:false
//         }
//         setJob(newJob)
//     }
//   return (
//     <div>
//       <h2>Danh sách công việc</h2>
//       <input type="text" name='Job' id='' onChange={changeJob}/>
//       <button onClick={register}>thêm</button>
//       <Jobs job={job}></Jobs>
//       <p>Danh sách công việc hoàn thành </p>
//     </div>
//   )
// }
import React from 'react'
import Form from "./bt/Form"
export default function App() {
  return (
    <div>
      <Form></Form>
    </div>
  )
}