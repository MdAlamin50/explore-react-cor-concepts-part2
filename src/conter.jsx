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

  return(
    <div style={{border:'3px solid yellow'}}>
        <h3>Counter:{count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handleInto}>Into</button>
    </div>
  )
}