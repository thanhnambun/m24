import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 
      1. function
        Khi cập nhật state
        setState
        2. Class
        Khi cập nhật state
        this.setState
        khi cập nhật state đối với function và class có khác nhau gì không?
        - Đối với function thì khi setState: replace (thay thế)
        - Đối với class thì setState: merge (gộp)
        *****************
        props không thể được thay đổi ở component con
        *****************
        state là dùng để lưu thông tin, dữ liệu có thể thay đổi trong quá trình sử dụng
        ****************
         ReactJS dùng virtual DOM (DOM ảo)
        react js có hỗ trợ sever side rendering
        react js ràng buộc dữ liệu 1 chiều onway data biding
        ******* 
        SPA: Single-pages application: Ứng dụng trang đơn
        index.html: Lần đầu tiên tải trang thì toàn bộ dữ liệu sẽ được tải xuống file index.html
        MPA: Multi-pages application: ứng dụng nhiều trang
        khi truy cập trang nào thì sẽ loading dữ liệu trang đó: ==> tối ưu cho SEO (search engine optimization) tối ưu công cụ tìm kiếm
        cài thêm thư viện React Rounter-DOM: để quản lí các route
        ******************
        react js dùng thư viện babel để biên dịch code js thành   ts
        ******
        destructuring 
      */}
    </>
  )
}

export default App
