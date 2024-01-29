import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { UpdateUserById } from '../services/DashBoard.api';

function EditProfilePage(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [userEditProfilePage, setUserEditProfilePage] = useState(props.user);
  const [File, setFile] = useState('');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    genero: '',
    password: '',
    user_id: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setFormState({
      nome: user.nome || '',
      email: user.email || '',
      genero: user.genero || '',
      password: '',
      user_id: user.user_id || '',
    });
  }, []);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };


  async function handleSubmit(){
    const user = JSON.parse(localStorage.getItem('user'));
    try{
      await UpdateUserById( {
        'genero': formState.genero,
        'admin_privileges': user.admin_privileges,
        'email': formState.email,
        'user_id': user.user_id,
        'password': formState.password,
        'nome': formState.nome,
        'profile_image': File})

      }catch(error){

    }
      }


  function handleFileChange(files) {
    console.log(files[0].base64);
    setFile(files[0].base64);
  }

  return (
    <>
      <div className="flex gap-2">
        <button className="text-sm sm:text-base bg-pale_purple rounded px-2 py-1" onClick={handleClickOpen}>
          Editar Perfil
        </button>
      </div>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h4" sx={{ my: 2, textAlign: 'center' }}>
            Criação de um utilizador
          </Typography>
          <Box component="form" className="flex-col sm:!flex">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nome"
                  label="nome"
                  name="nome"
                  autoComplete="Nome Completo"
                  value={formState.nome}
                  onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="genero"
                  label="Genero"
                  name="genero"
                  autoComplete="genero"
                  value={formState.genero}
                  onChange={(e) => setFormState({ ...formState, genero: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <FileBase64 multiple={false} onDone={handleFileChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  placeholder='******'
                  id="password"
                  autoComplete="Password"
                  value={formState.password}
                  onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Adicionar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditProfilePage;
