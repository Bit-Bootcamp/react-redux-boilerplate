import React from "react";
import { useRegisterUserMutation } from "../services/productsApi";
export default function Register() {
  const [registerUser, { data, isLoading, error }] = useRegisterUserMutation();

  if (isLoading) {
    return <p> is Loading ...</p>;
  }

  return (
    <div>
      Register Page
      <button
        onClick={() => {
          registerUser({
            firstname: "Hama",
            lastname: "Dler",
            email: "fake email",
            password: "123456789",
          });
        }}
      >
        register user
      </button>
      {JSON.stringify(data)}
      {JSON.stringify(error)}
    </div>
  );
}
