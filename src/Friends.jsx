import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function friends() {
  const [Friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <>
      <h3>Friends: {Friends.length}</h3>
      {Friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </>
  );
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3.use fetch to load data
 * 4.set loaded data to the state
 * **/
