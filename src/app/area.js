"use client"
import { useState } from "react";


export default function Area() {
  const [num,setNum] = useState(0);
  return (
   <>
   <button onClick={()=>{setNum(num+1)}}>
    {num}
   </button>
   </>
  );
}
