// import { useState } from "react";
// const Home =() =>{
//     let [count,setCount] = useState(0)
// let inc = () =>{
//     setCount(++count)
// }
// let dec = () =>{
//     setCount(--count)
// }
// let reset = () =>{
//     setCount(count=0)
// }

// return(
    
// <div className="home">
//    <h1>counter</h1>
//    <h2 id="value">{count}</h2>
//    <button onClick={inc}>Increment</button>
//    <button onClick={dec}>Dec</button>
//    <button onClick={reset}>Reset</button>

// </div>
// )
// }

// export default Home;


// import { useState } from "react";
// const Home =() =>{
//     let [count,setName] = useState("you didn't clicked...!!!")
// let inc = () =>{
//     setName("you clicked...!!")
// }


// return(
    
// <div className="home">
//    <h1>counter</h1>
//    <h2 id="value">{count}</h2>
//    <button onClick={inc}>Increment</button>
  

// </div>
// )
// }

// export default Home;


import { useState } from "react";
const Home =() =>{
    let count =0;
let inc = () =>{
   count++;
   document.getElementById("value").textContent=count;
}
let dec = () =>{
    count--;
    document.getElementById("value").textContent=count;
 }
 let reset = () =>{
    count=0;
    document.getElementById("value").textContent=count;
 }

return(
    
<div className="home">
   <h1>counter</h1>
   <h2 id="value">{count}</h2>
   <button onClick={inc}>Increment</button>
   <button onClick={dec}>Dec</button>
   <button onClick={reset}>Reset</button>

</div>
)
}

export default Home;