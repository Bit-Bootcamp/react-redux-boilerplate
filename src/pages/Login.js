import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
export default function Login() {
  // our local user state
  const [user, setUser] = useState({});

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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
