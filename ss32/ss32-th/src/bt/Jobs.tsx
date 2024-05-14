import React, { useState } from 'react'
import Job from './Job'


interface Jobs {
    name: string,
    id: number,
    status: boolean
}
interface Props {
    job: Jobs
}
let data: any = localStorage.getItem("jobs") || "[]"
if (data === "null") {
    data = [];
} else {
    data = JSON.parse(data)
}
export default function Jobs(props: Props) {
    // let jobList:Jobs=  [
    //     {
    //         name: "đá bóng ",
    //         id: 1,
    //         status: false
    //     },
    //     {
    //         name: "cafe ",
    //         id: 2,
    //         status: false
    //     },
    //     {
    //         name: "cầu lông ",
    //         id: 3,
    //         status: false
    //     }
    // ]
    // danh sách công việc 
    const [jobs, setJobs] = useState<Jobs[]>(data)
    const { job } = props
    console.log("123", job);
    // setJobs([...jobs,job])
    let newJob = jobs.push(job)
    console.log("123", newJob);

    // localStorage.setItem("jobs", JSON.stringify(newJob))
    return (
        <div>
            <h1>Jobs:</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái </th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((item, index) => {
                        return <Job job={item} stt={index}></Job>
                    }
                    )}
                </tbody>
            </table>

        </div>
    )
}
