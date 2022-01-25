import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import DisplayPosts from "./Blog/DisplayPosts";
import useFetch from "./Utils/useFetch";

const Login = () => {
  const { post, loading } = useFetch("http://localhost:1337/api/");
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState([]);

  const handleLogin = (event) => {
    post("auth/local/", credentials)
      .then((data) => {
        if (data) {
          let { jwt, user } = data;
          console.log(data);
          localStorage.setItem(jwt, jwt);
          setLoggedIn(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(console.log(credentials));
  };

  return (
    <>
      {!loggedIn ? (
        <Container>
          <Form onSubmit={handleLogin}>
            <Form.Input
              type="text"
              name="Username:"
              label="identifier"
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  identifier: event.target.value,
                })
              }
            />
            <Form.Input
              type="password"
              name="Password"
              label="password"
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  password: event.target.value,
                })
              }
            />
            <Form.Button type="submit">Submit</Form.Button>
          </Form>
        </Container>
      ) : (
        <DisplayPosts />
      )}
    </>
  );
};

export default Login;
