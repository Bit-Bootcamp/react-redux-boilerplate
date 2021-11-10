import React from "react";
import { useSelector } from "react-redux";
import ChangeColor from "../components/ChangeColor";
export default function Home() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1> Home page</h1>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>

      <ChangeColor />
    </div>
  );
}
