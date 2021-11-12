import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByValue } from "../features/countSlice";
export default function MainCounter() {
  // Local number state
  const [number, setNumber] = useState(0);

  // We use this to dispatch actions and make changes to the global store
  const dispatch = useDispatch();

  // useSelector to read global state (redux store)
  let countFromStore = useSelector((state) => state.count.value);

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <h2>Our global count is: {countFromStore}</h2>

      <div>
        {/* On changing (typing), run handleNumber function that takes the input and puts it in the local state number  */}
        <input type="number" onChange={handleNumber} />

        {/* When button is clicked, dispatch IncrementByValue action and pass it number (action.payload = number) */}
        <button onClick={() => dispatch(incrementByValue(number))}>
          Increment By Value
        </button>
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}> -</button>
    </div>
  );
}
