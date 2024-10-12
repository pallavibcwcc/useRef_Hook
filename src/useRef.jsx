import React,{useState,useEffect,useRef} from 'react'


const UseRef = () => {
  const[userInput,setUserInput]= useState("");
   const renders=useRef(0);

   useEffect(()=>{
   renders.current=renders.current+1;
   })
return (
<div>
   <input value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
   <p>The component {renders.current} time</p>
</div>
)
}
export default UseRef;