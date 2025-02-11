"use client";

import { useState } from "react";
import "./styles.css";

function Notes() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setMessages((prevMessages) => [...prevMessages, "Input cannot be empty."]);
    } else {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <br />
      <div className="messages">
        {messages.length > 0 && (
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        )}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write a note..."
          className="input-box"
        />
        <br />
        <button className="button">Enter</button>
      </form>



    </div>
  );
}

export default Notes;
