

import { useEffect, useState } from "react";

function App() {
    const fetch = {};
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    // const [random, setRandom] = useState(0);


  // useEffect(() => {
  //   alert('updated');
  // });

  // useEffect(() => {
  //   // alert('updated');
  //   setRandom(Math.random());
  // },[]);
  
  useEffect(() => {
    alert('updated');
  },[count]);

  return (
    <div>
        <h3>Count = {count}</h3>
        <h3>Count2 = {count2}</h3>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={() => setCount2(count2+1)}>Increase2</button>
    </div>
  );
}
export default App;