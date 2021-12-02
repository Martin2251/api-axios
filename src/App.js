import logo from "./logo.svg";
import axios from "axios";

function App() {
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
