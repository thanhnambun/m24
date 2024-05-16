import React from 'react'
import'./Header.css'
export default function Header() {
    return (
        <>
            <div className="wrapper-header">
                <a className='menu1'>Home</a>
                <a className="menu1"  >
                    danh sách sản phẩm
                </a>
                <div className="icon-trangchu">
                    <a href="giohang.html"> <i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        </>
    )
}
