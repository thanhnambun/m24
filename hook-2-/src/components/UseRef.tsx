import React, { useState, useRef, useEffect } from 'react'

export default function UseRef
    () {
    const [count, setCount] = React.useState<number>(0)
    let index = 0
    const useRef1 = useRef(0)
    const handleClick = () => {
        index = index + 1
        setCount(count + 1)
        useRef1.current = useRef1.current + 1
    }
    console.log(useRef1.current);
    const forcusinput = useRef<HTMLInputElement>(null)
    useEffect(() => {
        forcusinput.current?.focus()

    })

    return (
        <div>UseRef
            {/* 
                nó là hook cung cấp 
                cách udngf import vào 
                kết quả trả về là 1 đối tượng 
                và trong đối tượng đó mặc định current

            */} <br />
            <label htmlFor="">nhập email</label><br />
            <input ref={forcusinput} type="text" /><br />
            <label htmlFor="">nhập mật khẩu</label><br />
            <input type="text" /><br />
            <button>login</button><br />
            <button onClick={handleClick}>Click</button><br />
        </div>
    )
}

