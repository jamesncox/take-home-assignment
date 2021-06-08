import "./App.css";
// refactor to the descructed import {useState} from "react" because it's more familiar to me
import React, { useState } from "react";

function App() {
  // refactor calling useState without referencing React here
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

  // Create two functions, handleUpperCase and handleLowerCase that are
  // wired up to the two buttons for toggling textOutput size
  const handleUpperCase = () => {
    // update the state of textOutput with .toUpperCase()
    setTextOutput(textOutput.toUpperCase());
  };

  const handleLowerCase = () => {
    // update the state of textOutput with .toLowerCase()
    setTextOutput(textOutput.toLowerCase());
  };

  // If I create a button for clearing textInput and textOutput,
  // create a function called clearTextInputAndOutput that resets the state of each.
  const handleClearText = () => {
    setTextInput("");
    setTextOutput("");
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      {/* Does this form need some more accessibility considerations? */}
      {/* The form is currently labelled implicitly and I think explicitly is better. */}
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
      {/* Is a <div> here for textOutput without a <p> tag or some other element as accessible and semantic? */}
      <div id="result">
        <p aria-label="text output">{textOutput}</p>
      </div>
      {/* Create a UI to select/switch between two text size modes: */}
      {/* Create two buttons, one that handles upper-casing textOutput and the other that handles lower-casing textOutput */}
      {/* Could be nice to have a button that also that clears textInput and textOutput*/}
      <button onClick={handleUpperCase}>UPPERCASE</button>
      <button onClick={handleLowerCase}>lowercase</button>
      <button onClick={handleClearText}>Clear Text</button>
    </div>
  );
}

export default App;
