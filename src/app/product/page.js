"use client"
import { useEffect,useState } from "react";


export default function ProductData() {
  const [data,setData] = useState([]);
  useEffect(async ()=>{
    let res = await fetch('https://dummyjson.com/products');
    let d = await res.json();
    console.log(d);
    setData(d.products);
  },[]);
  return (
   <>
   <h1>Data List</h1>
   {
    data.map((x)=>{
        return <h5>Name-{x.title}</h5>
    })
   }
   </>
  );
}
