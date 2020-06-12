// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import {Message} from './message.js'
import './App.css'
export default function App() {
  let [day, setDayfan] = useState(1)
  let [night, setMynight] = useState(true)

  return (
 
 <div className={`box ${night ? 'light' :'dlight'} ` } >
      
    
    {/* <div className={night ? 'light':'dlight',} > */}
  {/* //  <div className = {night ? 'light' : ''}> */}
    <h1>Good  {night ? 'Morning' :'Night'} </h1>
      <Message mday={day}/>
      <br></br>
      
      <button onClick={()=>setDayfan(++day)}>Increment</button>
          <button onClick={()=>setDayfan(--day)} >Decrement</button>


          <button onClick={()=>setMynight(!night)} >Day /Night</button>
    </div>
    
  );
}



// export default App;