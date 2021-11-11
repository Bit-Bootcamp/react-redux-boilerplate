import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeBackground, changeText } from "../features/themeSlice";
export default function ChangeColor() {
  let [background, setBackground] = useState("");
  let [text, setText] = useState("black");

  const dispatch = useDispatch();

  function handleBackground(e) {
    setBackground(e.target.value);
  }
  function handleText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      Change background color:
      <input type="text" onChange={handleBackground} />
      <button
        onClick={() => {
          dispatch(changeBackground(background));
        }}
      >
        Change Color
      </button>
      Change text color:
      <input type="text" onChange={handleText} />
      <button
        onClick={() => {
          dispatch(changeText(text));
        }}
      >
        Change Color
      </button>
    </div>
  );
}
