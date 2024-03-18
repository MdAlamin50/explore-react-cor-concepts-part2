import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0)
    const handleAdd =() =>{
        const newCount =count+1;
        setCount(newCount);
    }

    const handleReduce =()=>{
      const newCount=count-1
      setCount(newCount)
    }

    const handleInto = () => {
       const newCount=count*3
       setCount(newCount)
    }

    const setStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }

  return(
    <div style={setStyle}>
        <h3>Counter:{count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handleInto}>Into</button> 
    </div>
  )
} 