import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
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
import {RegisterUser} from '../../../services/user.api'

function TableUsers() {

    // users da API
    const [usersDash, setUsersDash] = useState([]);

    //paginação disponivel através do pacote das tabelas.
    const [pageSize, setPageSize] = useState(5);

    const [openDialog, setOpenDialog] = useState(false);

    const [alertOpen, setAlertOpen] = useState(false);

    const [formState, setFormState] = useState({
      name: '',
      email: '',
      genero: '',
      password: '',
    });

    const [ File , setFile] = useState("");

    //para saber que linha esta ativa
    const [rowId, setRowId] = useState(null);

    const [usersChangeUpdated, setusersChangeUpdated] = useState(0);

    useEffect(() => {
        async function getusers(){
            let user = JSON.parse(localStorage.getItem('user'));
            const users = await GetUsersDash();
            
            // para filtrar o nosso user.
            const filteredUsers = users.filter((userData) => userData.user_id !== user.user_id);

            setUsersDash(filteredUsers);
        }
        getusers();
    }, [usersChangeUpdated]);

    const columns = useMemo(
        () => [
            {field: 'profile_image', headerName: 'Avatar', width: 60, renderCell: params=> <Avatar src={params.row.profile_image}/>, sortable: false, filterable: false},
            {field: 'user_id', headerName: 'ID', width: 60},
            {field: 'nome', headerName: 'Nome', width: 170},
            {field: 'email', headerName: 'Email', width: 200, editable: true},
            {field: 'password', headerName: 'Password', width: 170, sortable: false, valueGetter: (params) => '********', editable: true },
            {field: 'genero', headerName: 'Genero', width: 125, editable: true},
            {field: 'admin_privileges', headerName: 'Admin', width: 120, type:'boolean', editable: true},
            {field: 'aboutme', headerName: 'About', width: 150, editable: true},
            {field: 'telefone', headerName: 'Telefone', width: 170, editable: true},
            {field: 'jobtitle', headerName: 'Profissão', width: 170, editable: true},
            {field: 'locations', headerName: 'Localização', width: 170, editable: true},
            {field: 'Edit', headerName: 'Edit', type: 'actions', renderCell: (params) => (  <UserActions {...{ params, rowId, setRowId, setusersChangeUpdated, usersChangeUpdated}} />)},
            {field: 'Remove', headerName: 'Remove', type: 'actions', renderCell: (params) => (  <UserActionsRemove {...{ params, rowId, setRowId, setusersChangeUpdated, usersChangeUpdated}} />)},             
            ],
        [rowId, usersChangeUpdated] // pois se houver uma alteração na linha temos de renderizar os botoes
      );


      // funções para tratamento do dialog e do respetivo submit

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
              await RegisterUser(formJson.name, formJson.email, formJson.genero, formJson.password, formJson.profile_image );
              setAlertOpen(true);
              setOpenDialog(false);
              const update = usersChangeUpdated + 1;
              setusersChangeUpdated(update);
        }catch(error){

        }
      }


      function getFiles(File){
        console.log(File.base64)
        setFile(File.base64)
      }


  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3" component="h3" sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        Gestão de Utilizadores
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', xl: 'flex-end' },
          marginBottom: 1,
          marginRight: { xl: 1 },
          marginLeft: { xs: 1 },
        }}
      >
        <Button onClick={() => setOpenDialog(true)} sx={{ color: 'black' }}>
          <GroupAddOutlinedIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
        </Button>
      </Box>
      <DataGrid
        columns={columns}
        rows={usersDash}
        getRowId={(row) => row.user_id}
        initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5},
            },
          }
        }
        pageSize={pageSize}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        pageSizeOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        onCellEditStop={(params) => setRowId(params.id)}
      ></DataGrid>
    </Box>

    <Dialog open={openDialog} onClose={handleClose}>
      <DialogContent>
        <Typography variant='h4' sx={{ my: 2, textAlign: 'center'}}>Criação de um utilizador</Typography>
        <Box component="form" className="flex-col sm:!flex">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="Nome Completo"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
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
                value={formState.password}
                onChange={(e) => setFormState({ ...formState, password: e.target.value })}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            sendInfo({ ...formState, profile_image: File });
          }}
        >
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
    <SucessAlert open={alertOpen} handleClose={handleCloseAlert} />
  </>
  )
}

export default TableUsers