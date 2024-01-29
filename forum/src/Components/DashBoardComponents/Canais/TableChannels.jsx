import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import {GetChannels} from '../../../services/DashBoard.api';
import { DeleteChannelById } from '../../../services/DashBoard.api';
import { UpdateChannelById } from '../../../services/DashBoard.api';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import FileBase64 from 'react-file-base64';
import Remove from '../Remove';
import Edit from '../Edit';
import {CreateChannel} from '../../../services/DashBoard.api'

function TableChannels() {

    // users da API
    const [ChannelsDash, setChannelsDash] = useState([]);

    //paginação disponivel através do pacote das tabelas.
    const [pageSize, setPageSize] = useState(5);

    //para saber que linha esta ativa
    const [rowId, setRowId] = useState(null);
    
    const [alertOpen, setAlertOpen] = useState(false);
    
    const [channelsChangeUpdated, setChannelsChangeUpdated] = useState(0);
    
    const [formState, setFormState] = useState({
      name: '',
      senha: '',
    });
    
    // Funções relativas aos componentes Filhos remove e edit.
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [loadingRemove, setLoadingRemove] = useState(false);
    const [successRemove, setSuccessRemove] = useState(false);

    const [openDialog, setOpenDialog] = useState(false);

    const [ File , setFile] = useState("");
    
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
            await CreateChannel(formJson.nome, formJson.senha, File );
            setAlertOpen(true);
            setOpenDialog(false);
            const update = channelsChangeUpdated + 1;
            setChannelsChangeUpdated(update);
      }catch(error){

      }
    };


    function getFiles(File){
      console.log(File.base64)
      setFile(File.base64)
    }



    useEffect(() => {
        async function getAllChannels(){
            const pubs = await GetChannels();
            setChannelsDash(pubs);
            // Aqui ao contrario dos users não será necessario filtrar.
        }
        getAllChannels();
    }, [channelsChangeUpdated]);


    // ------------------------ tabela ------------------------------
    const columns = useMemo(
        () => [
            {field: 'channel_image', headerName: 'Imagem', width: 150, renderCell: params=> <Avatar src={params.row.channel_image}/>, sortable: false, filterable: false},
            {field: 'canal_id', headerName: 'ID', width: 150, editable: false, filterable: true},
            {field: 'nome', headerName: 'Canal', width: 300, editable: true},
            {field: 'senha', headerName: 'Senha', width: 300, editable: true},
            {field: 'Edit', headerName: 'Edit', type: 'actions', renderCell: (params) => (  <Edit {...{ params, rowId, setRowId, handleEdit, loading, success}} loading={loading[params.row.canal_id]}
              success={success[params.row.canal_id]} />)},            
            {field: 'Remove', headerName: 'Remove', type: 'actions', renderCell: (params) => (  <Remove {...{ params, rowId, setRowId, handleRemoveClick, loadingRemove, successRemove}} loading={loadingRemove[params.row.canal_id]}
              success={successRemove[params.row.canal_id]} />)},       
            ],
        [rowId, channelsChangeUpdated] // pois se houver uma alteração na linha temos de renderizar os botoes
      );




    // delete channel
    const handleRemoveClick = async (event, params, setRowId) => {
      // Impede que as ações se reproduzam para os restantes elemetos.
      event.stopPropagation();
        
      const { canal_id } = params.row

      // Faz update do loading de uma linha especifica
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [canal_id]: true }));
        
      const result = await DeleteChannelById({ 'canal_id': canal_id });
        
      // Faz set do loading de form a acabar o mesmo para de seguida dar como concluida a ação.
      setLoadingRemove((prevLoading) => ({ ...prevLoading, [canal_id]: false }));
          
      if (result.ok) {
        setSuccessRemove((prevSuccess) => ({ ...prevSuccess, [canal_id]: true }));

        // desta forma ve se o verde e ainda muda outra vez para normal.
        setTimeout(() => {
          setSuccessRemove((prevSuccess) => ({ ...prevSuccess, [canal_id]: false }));
        }, 1000); // 1000 milliseconds = 1 second

        // desta forma não é preciso dar reload
        const update = channelsChangeUpdated + 1;
        setChannelsChangeUpdated(update);
        setRowId(null);
        
        }

    };

    const handleEdit = async (event, params, setRowId) => {
      // Impede que as ações se reproduzam para os restantes elemetos.
      event.stopPropagation();
    
      const { canal_id } = params.row
    
      // Faz update do loading de uma linha especifica
      setLoading((prevLoading) => ({ ...prevLoading, [canal_id]: true }));
    
      const { nome, senha } = params.row;
      const result = await UpdateChannelById({ 'canal_id': canal_id, 'nome': nome, 'senha': senha });
    
      // Faz set do loading de form a acabar o mesmo para de seguida dar como concluída a ação.
      setLoading((prevLoading) => ({ ...prevLoading, [canal_id]: false }));
    
      if (result.ok) {
        setSuccess((prevSuccess) => ({ ...prevSuccess, [canal_id]: true }));

        // desta forma ve se o verde e ainda muda outra vez para normal.
        setTimeout(() => {
          setSuccess((prevSuccess) => ({ ...prevSuccess, [canal_id]: false }));
        }, 1000); // 1000 milliseconds = 1 second

                
        // desta forma não é preciso dar reload
        const update = channelsChangeUpdated + 1;
        setChannelsChangeUpdated(update);
        setRowId(null);
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
        <Button onClick={() => setOpenDialog(true)} sx={{ color: 'black' }}>
          <GroupAddOutlinedIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
        </Button>
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
        <Typography variant='h4' sx={{ my: 2, textAlign: 'center'}}>Criação de um Canal</Typography>
        <Box component="form" className="flex-col sm:!flex">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="nome"
                label="nome"
                name="nome"
                autoComplete="Nome do Canal"
                value={formState.nome}
                onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FileBase64 multiple={false} onDone={getFiles} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="senha"
                label="senha"
                type="password"
                id="senha"
                autoComplete="senha"
                value={formState.senha}
                onChange={(e) => setFormState({ ...formState, senha: e.target.value })}
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
  </>
  )
}

export default TableChannels