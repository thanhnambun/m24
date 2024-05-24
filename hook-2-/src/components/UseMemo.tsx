import React, { useState } from 'react'

interface Product {
    id: number,
    name: string,
    price: number,
    qty: number
}

export default function UseMemo() {
    const [count, setCount] = useState<number>(0)
    let cart: Product[] = [
        {
            id: 1,
            name: "Apple",
            price: 100,
            qty: 1
        },
        {
            id: 2,
            name: "ss",
            price: 200,
            qty: 1
        }
    ]
    let payment = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.qty
    }, 0)
    console.log(payment);

    return (
        <div>UseMemo

        {/* 
            đây là hook 
            sinh ra giúp ghi nhớ tính toán phức tạp và chỉ tínhtoán khi cần thiết 
        */}
            <button onClick={()=>setCount(payment+1)}>changname</button>
        </div>
    )
}
