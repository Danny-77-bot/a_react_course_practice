// import Card from "./compoents/lessons/Card";
// import CardTwo from "./compoents/lessons/CardTwo";

// import LoginButton from "./compoents/auhtentication/LoginButton";
// import LogoutButton from "./compoents/auhtentication/LogoutButton";
// import Navbar from "./compoents/auhtentication/Navbar";
// import ThemeButton from "./compoents/ThemeButton";
// import { AuthProvider } from "./context/AuthContext";
import Counter from "./Counter";
// import { ThemeProvider } from "./context/ThemeContext";

// import StatePractice from "./compoents/lessonThree/StatePractice";

// import UseeffectPractice from "./compoents/lesson4/UseeffectPractice"
// import FetchPosts from "./compoents/lesson4/FetchPosts"
// import TodoList from "./compoents/lesson4/lesson5/Todolist"
export default function App() {

  return (
    <div>
    <h1>useReducer Example</h1>
    <Counter />
  </div>
 
  )
}

 //   <AuthProvider>
  //   <Navbar />
  //   <LoginButton />
  //   <LogoutButton />
  // </AuthProvider>

{/* <Card>
<h1>here is the card componet</h1>
<p>how to pass to the chidrens</p>
</Card>

<CardTwo
name='I am card two'
description='this is card two'
/> */}

{/* <Product 
products={products}
/>  
<Button/>

<CustomButton
onFirstClick={()=>console.log('first click')}
onSecondClick={()=>console.log('second click')} */}

// import Product from "./compoents/lessontwo/Product"
// const Button=()=>{
//   return <button onClick={()=>console.log('clicked')}>click me</button>
// }
// const CustomButton=({onFirstClick,onSecondClick})=>{
//   if(onFirstClick){
//     return <button onClick={onFirstClick}>first click</button>
//   }
//   else {
//     return <button onClick={onSecondClick}>second click</button>
//   }

// }

{/* <StatePractice/>  */}
{/* <UseeffectPractice/>  */}

{/* <FetchPosts/>  */}
{/* <TodoList/>   */}


  // <ThemeProvider>
    //   <div style={{ textAlign: "center", marginTop: "50px" }}>
    //     <h1>useContext Example</h1>
    //     <ThemeButton />
    //   </div>
    // </ThemeProvider>