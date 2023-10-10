import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Form>
      <div className="text-center">
        <h4>Login</h4>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Terms & Conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className="mt-4">
        <p className="text-center">
          Don't have an account? <Link to="/register">Launch setup wizard</Link>
        </p>
      </div>
    </Form>
  );
};

export default Login;
