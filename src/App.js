import "./App.css";
import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // display user input unless string is empty, then display default message
    setTextOutput(textInput ? textInput : "Your formatted text will go here!");
  };

  const handleUpperCase = () => {
    setTextOutput(textOutput.toUpperCase());
  };

  const handleLowerCase = () => {
    setTextOutput(textOutput.toLowerCase());
  };

  const clearInputAndOutputText = () => {
    setTextInput("");
    setTextOutput("");
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label aria-label="text input">
          <textarea
            placeholder="Here is some example text"
            onChange={handleChange}
            value={textInput}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id="result">
        <p aria-label="text output">{textOutput}</p>
      </div>
      <button onClick={handleUpperCase}>UPPERCASE</button>
      <button onClick={handleLowerCase}>lowercase</button>
      <button onClick={clearInputAndOutputText}>Clear Text</button>
    </div>
  );
}

export default App;
