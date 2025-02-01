import React, { useEffect } from 'react'
import { useState } from 'react';

export default function UseeffectPractice() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

     useEffect(()=>{
         console.log('useEffect')
         document.title=`${count}`
     },[count,name])

  return (
    <div>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setName('omnia')}>change name</button>
    </div>
  )
}
