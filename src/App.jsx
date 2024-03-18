import "./App.css";
import Counter from "./conter";
import Users from "./Users";
import Friends from "./Friends";
import Friend from "./Friend";

function App() {
  function  Concept(){
    return(
      <div>
        <ol>
          <li>Components</li>
          <li>Jsx</li>
          <li>Props</li>
          <li>Event Handler</li>
          <li>State</li>
          <li>load date</li>
        </ol>
        <hr />
      </div>
    )
  }
  
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button clicked2");
  };

  const addFore = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Concept></Concept>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click22</button>
      <button
        onClick={() => {
          alert("click3");
        }}
      >
        Click3
      </button>

      <button onClick={() => addFore(3)}>Click Four</button>
      <Users></Users>
      <Friends></Friends>
      <Friend></Friend>
      
    </>
  );
}

export default App;

/**
 * data lode korte gela 5 ta consept jante hobe
 * 1. create a state to store the data 
 *2. create use effect with o dependencies
 * 3. use fetch to load data 
 * 4.
 *  **/ 
