import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByValue } from "../features/countSlice";
export default function MainCounter() {
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  let countFromStore = useSelector((state) => state.count.value);

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <h2>Our global count is: {countFromStore}</h2>

      <div>
        <input type="number" onChange={handleNumber} />

        <button onClick={() => dispatch(incrementByValue(number))}>
          Increment By Value
        </button>
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}> -</button>
    </div>
  );
}
