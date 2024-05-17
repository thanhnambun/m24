import React, { useContext } from 'react'
import {UserContext1} from "./UserContext";
export default function D() {
    const getData = useContext(UserContext1)
  return (
    <div>D
        <p>{getData}</p>
    </div>
  )
}
