import { useState } from "react"

export default function StatePractice() {
    const [person,setPerson]=useState({name:'omnia',age:22,job:'developer',id:1})
    const [productlists,setProductLists]=useState([]);
    const [productIdentites,setProductIdentites]=useState([]);
  return (
    <div>
        <h1>{person.name}</h1>  
        <h1>{person.age}</h1>
        <h1>{person.job}</h1>
        <button onClick={()=>setPerson({...person,name:'ahmed'})}>update nane</button>      
        <button onClick={()=>setPerson({...person,age:person.age+1})}>update age</button>
          <form>
            <input type="text" onChange={(e)=>setPerson({...person,name:e.target.value})}/>
          </form>
        {productlists.map((product)=><li key={product.id}>{product.name}</li>)} 
    </div>
  )
}
