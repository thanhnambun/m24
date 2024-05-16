import React from 'react'
import Form from "./components/Form";

export default function App() {
  return (
    <div>
      App
      <p>
          {/*  các kĩ thuật làm vc vs form
                có 2 kĩ thuật chính 
                1. controlied
                2.uncontrolied (hook useRef)
                3. dùng thư viện fomirk
                *************
                trong form
                1 ô input
                2 textarea
                3 select option

          */}
          <Form></Form>
      </p>
    </div>
  )
}
