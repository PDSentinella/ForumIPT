import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {GetChannels} from '../../../services/DashBoard.api';
import UserActions from '../Users/UserActionsEdit';
import UserActionsRemove from '../Users/UserActionsRemove';

function TableChannels() {

    // users da API
    const [ChannelsDash, setChannelsDash] = useState([]);

    //paginação disponivel através do pacote das tabelas.
    const [pageSize, setPageSize] = useState(5);

    //para saber que linha esta ativa
    const [rowId, setRowId] = useState(null);

    const [pubsChangeUpdated, setpubsChangeUpdated] = useState(0);

    useEffect(() => {
        async function getpublicacoes(){
            const pubs = await GetChannels();
            setChannelsDash(pubs);
            // Aqui ao contrario dos users não será necessario filtrar.
        }
        getpublicacoes();
    }, [pubsChangeUpdated]);

    const columns = useMemo(
        () => [
            {field: 'channel_image', headerName: 'Imagem', width: 150, renderCell: params=> <Avatar src={params.row.channel_image}/>, sortable: false, filterable: false},
            {field: 'canal_id', headerName: 'ID', width: 150, editable: false, filterable: true},
            {field: 'nome', headerName: 'Canal', width: 300, editable: true},
            {field: 'senha', headerName: 'Senha', width: 300, editable: true},
            {field: 'Edit', headerName: 'Edit', type: 'actions', renderCell: (params) => (  <UserActions {...{ params, rowId, setRowId, setpubsChangeUpdated, pubsChangeUpdated}} />)},
            {field: 'Remove', headerName: 'Remove', type: 'actions', renderCell: (params) => (  <UserActionsRemove {...{ params, rowId, setRowId, setpubsChangeUpdated, pubsChangeUpdated}} />)},             
            ],
        [rowId, pubsChangeUpdated] // pois se houver uma alteração na linha temos de renderizar os botoes
      );


      // funções para tratamento do dialog e do respetivo submit

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3" component="h3" sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        Gestão de Canais
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
      </Box>
      <DataGrid
        columns={columns}
        rows={ChannelsDash}
        getRowId={(row) => row.canal_id}
        initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5},
            },
          }
        }
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        onCellEditStop={(params) => setRowId(params.id)}
      ></DataGrid>
    </Box>
  </>
  )
}

export default TableChannels