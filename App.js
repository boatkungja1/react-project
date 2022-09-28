

import { useEffect, useState } from "react";

function App() {
    const [name,setName] = useState(null);
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);
    // const [random, setRandom] = useState(0);


  // useEffect(() => {
  //   alert('updated');
  // });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    // .then(json => console.log(json.name))
    .then(json => setName(json.name))
  },[]);
  
  // useEffect(() => {
  //   alert('updated');
  // },[count]);

  return (
    <div>
      {/* {name != null && <h1>{name}</h1>} */}
      {name != null ? <h1>{name}</h1> : <h1>Loading....</h1> }
        {/* <h3>Count = {count}</h3>
        <h3>Count2 = {count2}</h3>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={() => setCount2(count2+1)}>Increase2</button> */}
    </div>
  );
}
export default App;