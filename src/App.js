
// import './App.css';
// // import './Home';
// // import Home from './Home';
// // import Navbar from './navbar2';
// // import Movie from './movie'
// // import Movie1 from './movie1'
// import Component01 from './comp1';
// import Component02 from './comp2';
// import Component03 from './comp3';
// import Component04 from './comp4';
// import State from './state'
// import Value2 from './state2';




// function App() {
//   return (
//     <div className="App">
//       <Component01/>
//       <div className='page'>
//         <div className="left">
//         <Component02/>
//         </div>
//         <div className='right'>
//       <Component03/>
//       <Component04/>
//       </div>
//       </div>
//       <State/>
//      <Value2/>
//     </div>
    
//   );
// }

// export default App;


// import Component02 from './comp2'
// function App() {
//   return (
//     <div className="App">
//     <Component02/>

//     </div>
    
//   );
// }

// export default App;





// import Use from './props';
// import { useState,useEffect } from 'react';

// function App() {
//   let [value,setValue]=useState([]);
// let handleDelete=(id)=>{
//   let newVAl=value.filter((item)=>item.id!=id)
//   setValue(newVAl);
// }
// useEffect(()=>{
//   // console.log("Hello😎");
//   fetch("http://localhost:5000/value")
//   .then(res=>{
//     return res.json();
//   })
//   .then(data=>{
//     setValue(data)
//   })
// },[])

//   return (
//     <div className="App">
// <Use appData={value} pageTitle="All Movies" func={handleDelete}/>
// <Use appData={value.filter((a)=>a.language==="Telugu")} pageTitle="Particular language" func={handleDelete}/>

//     </div>
    
//   );
// }

// export default App;

import Component02 from './comp2'
 import { useEffect, useState } from "react";
import State from './useState'
function App(){
  let[value,setValue]=useState([])
  // let[isPendding,setIsPending]=useState(true)
  // let[ismovies,setMoviesPending]=useState("the movies")
  let handleDelete = (id) =>{
    let newValue=value.filter((item)=>item.id != id)
    setValue(newValue)
  }
  let showMovies =()=>{
    fetch(" http://localhost:5000/value ")
    .then((res)=>{
      return res.json();
    })
    .then(data=>{
      setValue(data)
    })
  }
  // useEffect(()=>{
  //   console.log("Hello 😎");
  //   fetch(" http://localhost:5000/value ")
  //   .then((res)=>{
  //     return res.json();
  //   })
  //   .then(data=>{
  //     setValue(data)
  //     // setIsPending(false) 
  //   })
  // },[])
  return (
   
<div className="App">
<button onClick={showMovies}>click for Movies</button>
 <State appData={value}  pageTital="All My Favorite Movies" func={handleDelete}/>
 <State appData={value.filter((a)=>a.language==="English")}  pageTital="Particular language based Movies" func={handleDelete}/>
 <Component02/> 
</div>
  );
}
export default App;


// import Navbar from './comp1'
// // import Component02 from './comp2'
// import Component03 from './comp3'
// import Component04 from './comp4'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// function App() {
//   return (
//     <div className="App">
//     <Router>
//       <div>
// //       <Navbar/>
// //       <Switch>
// //         <Route exact path="/">
// //         <Component02/>
// //         </Route>
// //         <Route exact path="/comp3">
// //         <Component03/>
// //         </Route>
// //         <Route exact path="/comp4">
// //         <Component04/>
// //         </Route>
// //       </Switch>
// //       </div>
// //     </Router>

//     </div>
    
//   );
// }

// export default App;