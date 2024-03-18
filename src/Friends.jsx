import { useEffect, useState } from "react"
import Friend from "./friend";

export default function Friends(){
    const [Friends,setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setFriends(data))
    },[])

    return(
        <div>
            <h3>Friends: {Friends.length}</h3>
            {
                Friends.map(friend=><Friend friend={friend}></Friend>)
            
            }
        </div>
        
        )
}

/**
 * 1. state to hold data 
 * 2. use effect with dependency array
 * 3.use fetch to load data 
 * 4.set loaded data to the state
 * **/ 