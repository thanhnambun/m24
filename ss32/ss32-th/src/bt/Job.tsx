import React from 'react'
interface Props {
    name: string,
    id: number,
    status: boolean
}
interface Job {
    job: Props,
    stt: number,
}
export default function Job(props: Job) {
    const { job } = props
    const { stt } = props

    return (
        <>
            <tr>
                <td>{stt + 1}</td>
                <td>{job.name}</td>
                <td> {job.status ? "Bạn đã hoàn thành" : "Bạn chưa hoàn thành"}</td>
            </tr>

        </>
    )
}
