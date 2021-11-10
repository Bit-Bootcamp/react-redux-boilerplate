import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      About page
      <h1> Name: {user.name}</h1>
      <h2> Age: {user.age}</h2>
      <h1> Email: {user.email}</h1>
    </div>
  );
}
