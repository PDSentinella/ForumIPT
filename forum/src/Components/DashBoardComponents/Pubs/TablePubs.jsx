import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {GetPubs} from '../../../services/DashBoard.api';
import Remove from '../Remove';
import Edit from '../Edit';
import { DeletePubById } from '../../../services/DashBoard.api';
import { UpdatePubById } from '../../../services/DashBoard.api';

function TableUsers() {

    // users da API
    const [pubsDash, setpubsDash] = useState([]);

    //paginação disponivel através do pacote das tabelas.
    const [pageSize, setPageSize] = useState(5);

    //para saber que linha esta ativa
    const [rowId, setRowId] = useState(null);

    const [pubsChangeUpdated, setpubsChangeUpdated] = useState(0);

    // Funções relativas aos componentes Filhos remove e edit.
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [loadingRemove, setLoadingRemove] = useState(false);
    const [successRemove, setSuccessRemove] = useState(false);

    const handleRemoveClick = async (event, params) => {
      // Impede que as ações se reproduzam para os restantes elemetos.
      event.stopPropagation();
        
      const { publication_id } = params.row

      // Faz update do loading de uma linha especifica
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [publication_id]: true }));
        
      const result = await DeletePubById({ 'publication_id': publication_id });
        
      // Faz set do loading de form a acabar o mesmo para de seguida dar como concluida a ação.
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [publication_id]: false }));
          
      if (result.ok) {
        setSuccessRemove((prevSuccess) => ({ ...prevSuccess, [publication_id]: true }));
        // desta forma não é preciso dar reload
        const update = pubsChangeUpdated + 1;
        setpubsChangeUpdated(update);
        }

    };


    const handleEdit = async (event, params) => {
      // Impede que as ações se reproduzam para os restantes elemetos.
      event.stopPropagation();

      const { publication_id } = params.row

      // Faz update do loading de uma linha especifica
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [publication_id]: true }));
        
      const {msg, titulo} = params.row;
      const result = await UpdatePubById({'publication_id': publication_id, 'msg': msg, 'titulo': titulo});

      // Faz set do loading de form a acabar o mesmo para de seguida dar como concluida a ação.
      setLoading((prevLoading) => ({ ...prevLoading, [publication_id]: false }));
            
     if (result.ok) {
      setSuccess((prevSuccess) => ({ ...prevSuccess, [publication_id]: true }));
       // desta forma não é preciso dar reload
       const update = pubsChangeUpdated + 1;
       setpubsChangeUpdated(update);
       }
      };




    useEffect(() => {
        async function getpublicacoes(){
            const pubs = await GetPubs();
            setpubsDash(pubs);
            // Aqui ao contrario dos users não será necessario filtrar.
        }
        getpublicacoes();
    }, [pubsChangeUpdated]);

    const columns = useMemo(
        () => [
            {field: 'imagem', headerName: 'Imagem', width: 100, renderCell: params=> <Avatar src={params.row.imagem}/>, sortable: false, filterable: false},
            {field: 'publication_id', headerName: 'ID', width: 100, editable: false, filterable: true},
            {field: 'titulo', headerName: 'Titulo', width: 250, editable: true},
            {field: 'canal', headerName: 'Canal Associado', width: 250, editable: false, sortable: true},
            {field: 'msg', headerName: 'Mensagem', width: 500, sortable: false},
            {field: 'pubdate', headerName: 'Data de publicaçao', width: 125, editable: true},
            {field: 'Edit', headerName: 'Edit', type: 'actions', renderCell: (params) => (  <Edit {...{ params, rowId, setRowId, handleEdit, loading, success}} loading={loading[params.row.publication_id]}
              success={success[params.row.publication_id]} />)},
            {field: 'Remove', headerName: 'Remove', type: 'actions', renderCell: (params) => (  <Remove {...{ params, rowId, setRowId, handleRemoveClick, loadingRemove, successRemove}} loading={loadingRemove[params.row.publication_id]}
              success={successRemove[params.row.publication_id]} />)},             
            ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [rowId, pubsChangeUpdated] // pois se houver uma alteração na linha temos de renderizar os botoes
      );


      // funções para tratamento do dialog e do respetivo submit

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3" component="h3" sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        Gestão de Publicações
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
        rows={pubsDash}
        getRowId={(row) => row.publication_id}
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

export default TableUsers