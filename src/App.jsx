import "./App.css";
import Counter from "./conter"; 

function App() {
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

      <button onClick={() =>addFore(3)}>Click Four</button>
    </>
  );
}

export default App;
