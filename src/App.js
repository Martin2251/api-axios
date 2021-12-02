import logo from "./logo.svg";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response.data.content);
        setQuote(response.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // if a quoute is true it will return in paragraph tags
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      {quote && <p>{quote}</p>}
    </div>
  );
}

export default App;
