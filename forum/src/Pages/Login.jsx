import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginUserPassword } from '../services/user.api'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="https://www.ipt.pt/" color="inherit">
        IPT(Instituto Politecnico de Tomar)™
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
//const navigate = useNavigate();

export default function Login() {
 const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      if(data.get('email') === '' && data.get('password') === ''){
        document.getElementById('errorLabel').innerText = "Dados insuficientes!"
      }
      const response = await loginUserPassword(data.get('email'), data.get('password'));
      if(!response){
        localStorage.setItem("user", "");
      }else{

        localStorage.setItem("user", JSON.stringify(response));
        if(window.location.pathname === "/Login"){
          navigate("/")
        }
        else{window.location.reload(false)}
      }
  } catch (error) {
      document.getElementById('errorLabel').innerText = "Dados invalidos... Por favor tente outra vez!"
  }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="rounded-lg p-4 sm:border"
          sx={{
            borderColor: '#7ac142', 
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="/icons/ipt.png" sx={{ m: 1, bgcolor: 'white', width: 100, height: 100 }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography className='hidden text-ipt' id="errorLabel" component="h1" variant="body1">
            
            </Typography>
            <Grid container>
              <Grid item>
                <Link to="/Registo" variant="body2">
                  {"Ainda não tem conta? Registe-se!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}