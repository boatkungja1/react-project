import { useEffect, useState } from "react";

function App() {
  const [test,setTest] = useState('');

  //1. Every web rendering
  // useEffect (() => {
  //   console.log('useEffect');
  // });

  //2. Only at first time 
  useEffect(()=>{
    console.log('useEffect');
  },[]);

  //3. Watch variable's change
  useEffect(()=>{
    console.log('useEffect');
  },test);


  return (
    <div>
      <h1>{test}</h1>
      <button onClick={() => setTest('UseEffect')}>Update</button>
    </div>
  );
}
export default App;