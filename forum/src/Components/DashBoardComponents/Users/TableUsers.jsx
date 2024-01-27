import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {GetUsersDash} from '../../../services/DashBoard.api';
import UserActions from './UserActions';

function TableUsers() {

    // users da API
    const [usersDash, setUsersDash] = useState([]);

    //paginação disponivel através do pacote das tabelas.
    const [pageSize, setPageSize] = useState(5);

    //para saber que linha esta ativa
    const [rowId, setRowId] = useState(null);

    useEffect(() => {
        async function getusers(){
            const users = await GetUsersDash();
            console.log(users);
            setUsersDash(users);
        }
        getusers();
    }, []);

    const columns = useMemo(
        () => [
            {field: 'profile_image', headerName: 'Avatar', width: 60, renderCell: params=> <Avatar src={params.row.profile_image}/>, sortable: false, filterable: false},
            {field: 'user_id', headerName: 'ID', width: 60},
            {field: 'nome', headerName: 'Nome', width: 170},
            {field: 'email', headerName: 'Email', width: 200},
            {field: 'password', headerName: 'Password', width: 170, sortable: false},
            {field: 'genero', headerName: 'Genero', width: 150, editable: true},
            {field: 'admin_privileges', headerName: 'Admin', width: 120, type:'boolean', editable: true},
            {field: 'About me', headerName: 'About', width: 150},
            {field: 'telefone', headerName: 'Telefone', width: 170},
            {field: 'jobtitle', headerName: 'Profissão', width: 170},
            {field: 'locations', headerName: 'Localização', width: 170},
            {field: 'actions', headerName: 'Actions', type: 'actions', renderCell: (params) => (  <UserActions {...{ params, rowId, setRowId }} />)},        
            ],
        [rowId] // pois se houver uma alteração na linha temos de renderizar os botoes
      );


  return (
   <Box sx={{ height: '80%' ,width:'100%'}}>
    <Typography variant='h3' component='h3' sx={{ textAlign: 'center', mt: 3, mb: 3}}> Gestão de Utilizadores</Typography>
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
  )
}

export default TableUsers