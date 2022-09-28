import React, { useState } from "react";

function App() {

  // let count = 0;

  //React state variable
  const [count,setCount] = useState(0);
  const [disable,setDisable] = useState(false);

  const increase = () => {
    // count++;
    // console.log(count);
    setCount(count+1);
    if(count === 4){
      setDisable(true);
    }
  }
  const reset = () => {
    setCount(0);
    setDisable(false);
  }

  return (
  <>
 <h1>Counter = {count}</h1>
 <button onClick={increase} disabled={disable}>Click</button>
 <button onClick={reset} >Reset</button>
  </>
  );
}
export default App;
