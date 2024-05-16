import React, { useState } from 'react'
interface User {
    name: string,
    id: number,
    email: string
}
export default function Input() {
    const [user, setUser] = useState<User>({
        name: '',
        id: 1,
        email: ''
    })
    const [name, setName] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.value
        let value = e.target.value
        setUser({ ...user, [name]: value })
    }
    console.log("giá trị name", user);

    return (
        <div>Input
            <label htmlFor="">useName</label>
            <input
                onChange={handleChange}
                type='text'
            />
            <br />
            <label htmlFor="">email</label>
            <input type="email"
                onChange={handleChange}
            />
        </div>
    )
}
