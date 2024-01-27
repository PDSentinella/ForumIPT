import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import FileBase64 from 'react-file-base64';
import { useState } from 'react';
import { RegisterUser } from '../services/user.api'
import { useNavigate } from "react-router-dom";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link Link to="https://www.ipt.pt/" color="inherit">
        IPT(Instituto Politecnico de Tomar)™
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();



export default function SignUp() {

  const [ File , setFile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      if(data.get('email') === '' && data.get('password') === '' && data.get('genero') === '' && data.get('name') === ''){
        console.log("Dados insuficientes!")
      }
      const response = await RegisterUser(data.get('name'), data.get('email'), data.get('genero'), data.get('password'), File);
      if(!response){
        console.log("Dados inseridos insuficientes ou erro no sistema!")
      }else{
        navigate("/Login");
      }
  } catch (error) {

  }
  };

  function getFiles(File){
    console.log(File.base64)
    setFile(File.base64)
  }

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
            <LockOutlinedIcon sx={{ color: 'black' }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {/* É a partit do component=Form que podemos saber que isto vai ser um form */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="Nome Completo"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="genero"
                  label="genero"
                  name="genero"
                  autoComplete="genero"
                />
              </Grid>
              <Grid item xs={12}>
              <FileBase64 multiple={ false } onDone={ getFiles.bind(this) } />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="Password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login" variant="body2">
                  Já tem uma conta? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}