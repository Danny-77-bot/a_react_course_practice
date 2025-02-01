
export default function Product({products}) {
    
  return (
    <div>
        {products.length>0 && <h1>there are {products.length} products</h1>}
       {products.length>0?<div>
          {products.map((product)=><li key={Math.random()}>{product}</li>)}
       </div>:
       <div>there is no products</div>}   
    </div>
  )
}
