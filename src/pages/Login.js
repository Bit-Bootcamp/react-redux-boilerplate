import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      Login page
      <button
        onClick={() => {
          dispatch(login({ name: "hama", email: "hama@gmail.com", age: 25 }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}
