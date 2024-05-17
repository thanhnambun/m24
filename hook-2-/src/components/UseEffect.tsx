import { useEffect, useState } from "react";

export default function UseEffect() {
    const [count, setCount] = useState<number>(0);
    const [numbers, setNumber] = useState<number[]>([])
    const [active, setActive] = useState<boolean>(true)
    useEffect(() => {
        console.log("Đang gọi vào useEffect");
    }, [count]);
    const handleClick = () => {
        // let randomNumber = Math.floor(Math.random() * 10);
        // setNumber([...numbers, randomNumber]);
        setCount(count + 1);
    }
    return (
        <>
            {/* 
      Tất cả các hook bản chất là những function khi dùng phải import để dùng
      useEffect nhận vào 2 đối số 
      1. callback (arrow function)
      2. [] || [deps]
      ==> useEffect sẽ có 3 cách dùng
      C1. Chỉ chứa callback là 1 cái arrow function
      Khi component đc mount vào DOM thì useEffect được gọi
      Mỗi lần component được re-render thì nó cx được gọi
      C2. Chứa 1 callback và 1 []
        cũng đc gọi lại sau khi component đc mount vào dom  
        khi mỗi lần component re-render thì useEffect sẽ không được gọi lại
      C3. Chứa callback và [dependency]
      - componentDidMount đc gọi sau khi component đc render lần đầu
      - cũng đc gọi lại sau khi component đc mount vào dom
      - khi mà dêpndency thay đổi thì useEffect đc gọi 

      useEffect là phương thức thường đc sử dụng để sử lý các tác vụ như callAPI để lấy dữ liệu 
      thường đc dùng để xử lý các 
    */}
            <p>Giá trị {count}</p>
            <button onClick={handleClick}>Click</button>
        </>
    );
}