import React, { createContext, useState } from 'react'
import A from './A'
export const UserContext1 = createContext("")
export default function UserContext() {
    const [name, setName] = useState<string>("minh thu")
    return (
        <div>UserContext
            {/* 
            sinh ra giải quyết vẫn đề gì và nó dùng như nào ???

        */}
            <UserContext1.Provider value = {name}>
                <A />
            </UserContext1.Provider>
        </div>
    )
}
