import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {GetChannels} from '../../../services/DashBoard.api';
import { DeleteChannelById } from '../../../services/DashBoard.api';
import { UpdateChannelById } from '../../../services/DashBoard.api';
import Remove from '../Remove';
import Edit from '../Edit';

function TableChannels() {

    // users da API
    const [ChannelsDash, setChannelsDash] = useState([]);

    //paginação disponivel através do pacote das tabelas.
    const [pageSize, setPageSize] = useState(5);

    //para saber que linha esta ativa
    const [rowId, setRowId] = useState(null);

    const [channelsChangeUpdated, setChannelsChangeUpdated] = useState(0);


    useEffect(() => {
        async function getpublicacoes(){
            const pubs = await GetChannels();
            setChannelsDash(pubs);
            // Aqui ao contrario dos users não será necessario filtrar.
        }
        getpublicacoes();
    }, [channelsChangeUpdated]);

    const columns = useMemo(
        () => [
            {field: 'channel_image', headerName: 'Imagem', width: 150, renderCell: params=> <Avatar src={params.row.channel_image}/>, sortable: false, filterable: false},
            {field: 'canal_id', headerName: 'ID', width: 150, editable: false, filterable: true},
            {field: 'nome', headerName: 'Canal', width: 300, editable: true},
            {field: 'senha', headerName: 'Senha', width: 300, editable: true},
            {field: 'Edit', headerName: 'Edit', type: 'actions', renderCell: (params) => (  <Edit {...{ params, rowId, setRowId, handleEdit, loading, success}} loading={loading[params.row.publication_id]}
              success={success[params.row.publication_id]} />)},            
            {field: 'Remove', headerName: 'Remove', type: 'actions', renderCell: (params) => (  <Remove {...{ params, rowId, setRowId, handleRemoveClick, loadingRemove, successRemove}} loading={loadingRemove[params.row.publication_id]}
              success={successRemove[params.row.publication_id]} />)},       
            ],
        [rowId, channelsChangeUpdated] // pois se houver uma alteração na linha temos de renderizar os botoes
      );


    // Funções relativas aos componentes Filhos remove e edit.
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [loadingRemove, setLoadingRemove] = useState(false);
    const [successRemove, setSuccessRemove] = useState(false);


    // delete channel
    const handleRemoveClick = async (event, params) => {
      // Impede que as ações se reproduzam para os restantes elemetos.
      event.stopPropagation();
        
      const { canal_id } = params.row

      // Faz update do loading de uma linha especifica
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [canal_id]: true }));
        
      const result = await DeleteChannelById({ 'publication_id': canal_id });
        
      // Faz set do loading de form a acabar o mesmo para de seguida dar como concluida a ação.
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [canal_id]: false }));
          
      if (result.ok) {
        setSuccessRemove((prevSuccess) => ({ ...prevSuccess, [canal_id]: true }));
        // desta forma não é preciso dar reload
        const update = channelsChangeUpdated + 1;
        setChannelsChangeUpdated(update);
        }

    };

    const handleEdit = async (event, params) => {
      // Impede que as ações se reproduzam para os restantes elemetos.
      event.stopPropagation();

      const { canal_id } = params.row

      // Faz update do loading de uma linha especifica
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [canal_id]: true }));
        
      const {nome, senha} = params.row;
      const result = await UpdateChannelById({'canal_id': canal_id, 'nome': nome, 'senha': senha});

      // Faz set do loading de form a acabar o mesmo para de seguida dar como concluida a ação.
      setLoading((prevLoading) => ({ ...prevLoading, [canal_id]: false }));
            
     if (result.ok) {
      setSuccess((prevSuccess) => ({ ...prevSuccess, [canal_id]: true }));
       // desta forma não é preciso dar reload
       const update = channelsChangeUpdated + 1;
       setChannelsChangeUpdated(update);
       }
      };

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