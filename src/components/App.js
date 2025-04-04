import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  let [pa , setPara] = useState('')

  function handleClick()
  {
    setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    
    <div id="main">
      {/* // Do not alter the main div */}
      <button id='click' onClick={handleClick}>click</button>
      <p id ="para">{pa}</p>
      

    </div>
  );
}


export default App;
