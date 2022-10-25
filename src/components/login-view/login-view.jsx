import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const API_URL = 'https://myflixnow-app.herokuapp.com';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  /* Send a request to the server for authentication */
  axios
    .post("https://myflixnow-app.herokuapp.com/login", {
      Username: username,
      Password: password,
    })
    .then((response) => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch((e) => {
      console.log(e);
      // console.log("no such user");
    });
};


  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}