import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Avatar, Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {GetUsersDash} from '../../../services/DashBoard.api';
import UserActions from './UserActionsEdit';
import UserActionsRemove from './UserActionsRemove';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SucessAlert from "../../SucessAlert";
import FileBase64 from 'react-file-base64';
import Grid from '@mui/material/Grid';
=======
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {GetUsersDash} from '../../../services/DashBoard.api';
import UserActions from './UserActions';
>>>>>>> parent of 8012fd7 (Revert "Merge branch 'antonio' into paulo")

function TableUsers() {

    // users da API
    const [usersDash, setUsersDash] = useState([]);

    //paginação disponivel através do pacote das tabelas.
    const [pageSize, setPageSize] = useState(5);

<<<<<<< HEAD
    const [openDialog, setOpenDialog] = useState(false);

    const [alertOpen, setAlertOpen] = useState(false);

    const [ File , setFile] = useState("");

=======
>>>>>>> parent of 8012fd7 (Revert "Merge branch 'antonio' into paulo")
    //para saber que linha esta ativa
    const [rowId, setRowId] = useState(null);

    useEffect(() => {
        async function getusers(){
<<<<<<< HEAD
            let user = JSON.parse(localStorage.getItem('user'));
            const users = await GetUsersDash();
            
            // para filtrar o nosso user.
            const filteredUsers = users.filter((userData) => userData.user_id !== user.user_id);

            setUsersDash(filteredUsers);
=======
            const users = await GetUsersDash();
            console.log(users);
            setUsersDash(users);
>>>>>>> parent of 8012fd7 (Revert "Merge branch 'antonio' into paulo")
        }
        getusers();
    }, []);

    const columns = useMemo(
        () => [
            {field: 'profile_image', headerName: 'Avatar', width: 60, renderCell: params=> <Avatar src={params.row.profile_image}/>, sortable: false, filterable: false},
            {field: 'user_id', headerName: 'ID', width: 60},
            {field: 'nome', headerName: 'Nome', width: 170},
<<<<<<< HEAD
            {field: 'email', headerName: 'Email', width: 200, editable: true},
            {field: 'password', headerName: 'Password', width: 170, sortable: false},
            {field: 'genero', headerName: 'Genero', width: 125, editable: true},
            {field: 'admin_privileges', headerName: 'Admin', width: 120, type:'boolean', editable: true},
            {field: 'aboutme', headerName: 'About', width: 150, editable: true},
            {field: 'telefone', headerName: 'Telefone', width: 170, editable: true},
            {field: 'jobtitle', headerName: 'Profissão', width: 170, editable: true},
            {field: 'locations', headerName: 'Localização', width: 170, editable: true},
            {field: 'Edit', headerName: 'Edit', type: 'actions', renderCell: (params) => (  <UserActions {...{ params, rowId, setRowId }} />)},
            {field: 'Remove', headerName: 'Remove', type: 'actions', renderCell: (params) => (  <UserActionsRemove {...{ params, rowId, setRowId }} />)},             
=======
            {field: 'email', headerName: 'Email', width: 200},
            {field: 'password', headerName: 'Password', width: 170, sortable: false},
            {field: 'genero', headerName: 'Genero', width: 150, editable: true},
            {field: 'admin_privileges', headerName: 'Admin', width: 120, type:'boolean', editable: true},
            {field: 'About me', headerName: 'About', width: 150},
            {field: 'telefone', headerName: 'Telefone', width: 170},
            {field: 'jobtitle', headerName: 'Profissão', width: 170},
            {field: 'locations', headerName: 'Localização', width: 170},
            {field: 'actions', headerName: 'Actions', type: 'actions', renderCell: (params) => (  <UserActions {...{ params, rowId, setRowId }} />)},        
>>>>>>> parent of 8012fd7 (Revert "Merge branch 'antonio' into paulo")
            ],
        [rowId] // pois se houver uma alteração na linha temos de renderizar os botoes
      );


<<<<<<< HEAD
      // funções para tratamento do dialog e do respetivo submit
      function handleOpen(){
        setOpenDialog(!openDialog)
      }

      const handleClose = () => {
        setOpenDialog(false);
        
      };

      const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlertOpen(false);
      };

      // função responsavel pelo o envio do curso e da senha.
      async function sendInfo(formJson){
        try{
            setAlertOpen(true);
        }catch(error){

        }
      }


      function getFiles(File){
        console.log(File.base64)
        setFile(File.base64)
      }


  return (
    <>
   <Box sx={{ width:'100%'}}>
    <Typography variant='h3' component='h3' sx={{ textAlign: 'center', mt: 3, mb: 3}}> Gestão de Utilizadores</Typography>
    <Box sx={{display: 'flex', justifyContent: {xs:'flex-start', xl: 'flex-end'}, marginBottom: 1, marginRight: {xl: 1}, marginLeft: {xs: 1}}}>
        <Button onClick={() => {setOpenDialog(true)}} sx={{color: 'black'}}><GroupAddOutlinedIcon sx={{ fontSize: 30, cursor: 'pointer'}}/></Button>
    </Box>
=======
  return (
   <Box sx={{ height: '80%' ,width:'100%'}}>
    <Typography variant='h3' component='h3' sx={{ textAlign: 'center', mt: 3, mb: 3}}> Gestão de Utilizadores</Typography>
>>>>>>> parent of 8012fd7 (Revert "Merge branch 'antonio' into paulo")
    <DataGrid
        columns={columns}
        rows={usersDash}
        getRowId={row => row.user_id}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        onCellEditStop={(params) => setRowId(params.id)}
    >

    </DataGrid>
   </Box>
<<<<<<< HEAD


   <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent>
          <Box className="flex-col sm:!flex">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="name" label="name" name="name" autoComplete="Nome Completo" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="email" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="genero" label="genero" name="genero" autoComplete="genero" />
              </Grid>
              <Grid item xs={12}>
                <FileBase64 multiple={false} onDone={getFiles} />
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              const formData = new FormData(document.forms["userForm"]);
              const formJson = Object.fromEntries(formData.entries());
              //sendInfo(formJson);
            }}
          >
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    <SucessAlert open={alertOpen} handleClose={handleCloseAlert} />
    </>
=======
>>>>>>> parent of 8012fd7 (Revert "Merge branch 'antonio' into paulo")
  )
}

export default TableUsers