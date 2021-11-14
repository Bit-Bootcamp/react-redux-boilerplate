import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { login, logout } from "../features/userSlice";

export default function Login() {
  // our local user state - taybat ba componenty login, initial value = object
  const [user, setUser] = useState({});

  const globalUser = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  // const globalState = useSelector(state => state.state)
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    let newState = { ...user };
    newState.email = emailValue;

    setUser(newState);
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    let newState = { ...user };
    newState.password = passwordValue;

    setUser(newState);
  };

  return (
    <>
      <Container>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" onClick={() => dispatch(login(user))}>
            Login
          </Button>
          <Button variant="primary" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Form>
        {globalUser.email}
      </Container>
    </>
  );
}
