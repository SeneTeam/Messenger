import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import './Login.scss';

const styles = {
  paperContainer: {
    backgroundImage: `url(${'bg-img.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  }
};

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Box className="Login-Container" height="100vh" display="flex" flex="1" justifyContent="space-around">
      <Grid container justifyContent="center">
        <Grid className="left-column" item md={5} style={styles.paperContainer} justifyContent="center">
          <div className="bubble-icon">
            <img src="bubble.svg" height={80} width={80} />
            <br />
            <Typography>Converse with anyone with any language</Typography>
          </div>
        </Grid>
        <Grid className="right-column" item md={7} direction="column">
          <Container>
            <Box display="flex" flex="1" justifyContent="flex-end">
              <Typography>Don't have an account?</Typography>
              <Link className="link" href="/register" to="/register">
                <Button variant="contained">Register</Button>
              </Link>
            </Box>
          </Container>
          <form onSubmit={handleLogin}>
            <label className="banner">Welcome back!</label>
            <Grid>
              <Grid>
                <FormControl margin="normal" required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" required>
                <TextField
                  label="password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid container justifyContent="center">
                <Button className="btn-login" type="submit" variant="contained" size="large">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
