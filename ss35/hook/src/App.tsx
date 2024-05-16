// import React from 'react'
// import UseSate from './component/UseSate'

// export default function App() {
//   return (
//     <div>App
//       {/* 
//         Hook bản chất là những hàm giúp cho function có thể thức hiện đc các chức năng như class components
//         + react hook đc ra đời ở phiên bản react 16.8
//         + trc khi hook ra đời thì func chỉ đơn giản tạo ra các ui
//         function header(){

//         }
//         + hook ra đời giúp cho code ngắn hơn dễ dàng tiện lợi hơn so với class component
//         + dự án bh sở dụng hook nhiều hơn 
//         + khi làm vc với class thì phải nắm lifecycle
//         + react hook chỉ app dụng vs fuc component chứ o làm vs class
//         + khi làm vc vd hook phải để ý đến đầu vào , ra của các phương thức 
//         + các hook học là useSate , useEffect,useRef,useMemo,useReduce,useCallback

//       */}
//       <UseSate></UseSate>
//     </div>
//   )
// }
import React from 'react'
import Bt1 from './component/Bt1'
import Bt2 from './component/Bt2'
import Bt3 from './component/Bt3'
import Bt4 from './component/Bt4'
import Bt5 from './component/Bt5'
import Bt6 from './component/Bt6'
import Bt7 from './component/Bt7'
import Bt8 from './component/Bt8'
import Bt9 from './component/Bt9'
import Bt10 from './component/Bt10'

export default function App() {
  return (
    <div>
      <Bt1></Bt1>
      <br />
      <Bt2></Bt2>
      <br />
      <Bt3></Bt3>
      <br />
      <Bt4></Bt4>
      <br />
      <Bt5></Bt5>
      <br />
      <Bt6></Bt6>
      <br />
      <Bt7></Bt7>
      <br />
      <Bt8></Bt8>
      <br />
      <Bt9></Bt9>
      <br />
      <Bt10></Bt10>
    </div>
  )
}