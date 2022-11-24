import React,{useState,useEffect}from 'react';
import "./styles.css";


const App = () => {

  const[minVal,setMinVal]=useState(0);
  const[maxVal,setMaxVal]=useState(10);
  const[randomNum,setRandomNum]=useState(5);

  const giveRandomNumber= () => { 
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal )) + minVal)    
  } 
  return (
    <div className="hero">
      <center>
        <div className="container">
          <div className='randomNum'>
            <p id="r1">Random Number: <span>{randomNum}</span>
            </p>  
          </div>
          <div className='numContainer'>
            <div>
              <p id="min">Min:</p>
              <input id="btn1" type="number"     
              value={minVal}
              onChange={e=> setMinVal(+e.target.value)} 
                />   
            </div>
            <div>    
              <p id="max">Max:</p>
              <input id="btn2"type="number" 
               value={maxVal}
               onChange={e=> setMaxVal(+e.target.value)} 
              /><br />
            </div> 
          </div> <br /> <br /> 
          <button onClick={giveRandomNumber} type="button" id="getrandom">Get Random Number</button>
        </div>
      </center>
    </div>
  )
}

export default App
