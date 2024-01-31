import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CommentsDialog from './Comments';
import { Box } from '@mui/system';
import { GetAllChannels, GetChannels } from '../services/channels.api';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { addPublication } from '../services/publication.api';
import FileBase64 from 'react-file-base64';
import AddSharpIcon from '@mui/icons-material/AddSharp';

    



function AddPost(props){
  //hooks
    const [opend, setOpend] = React.useState(false);//hook MUI open/close dialog status
    const [canais, setCanais] = useState([]); // hook usado para fazer atualização da seleção de um canal
    const [canal, setCanal] = useState({ }); //hook para o canal efetivamente escolhido
    const [update,setUpdate] = useState(1); //hook para fazer o render de dados especificos na pagina (nao usado)

    const handleChange = (event) => {
      // vai ao array canais e seleciona o canal correspondente pelo id.
      const selectedCanalId = event.target.value;
      const selectedCanal = canais.find((canal) => canal.canal_id === selectedCanalId);
      setCanal(selectedCanal);
    };
    //MUI dialog handles open dialog status (using opend hook)
    const handleClickOpen = () => {
      setOpend(true);
    };
    //MUI dialog handles close dialog status (using opend hook)
    const handleClose = () => {
      setOpend(false);
    };
    //por entermedio de uma função de serviço tenta faz post de uma publicação
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      try {
        console.log(data.get("canal"));
        //objecto json a ser enviado para fazer o post da publicaçao
        let publicationData = {
          "user_id":JSON.parse(localStorage.getItem("user")).user_id,
          "canal":data.get("canal"),
          "titulo":data.get("titulo"),
          "msg":data.get("menssagem")
        }
        //test console.log
        //console.log(publicationData)
        //resposta da função service
        const response = await addPublication(publicationData)
        console.log(response)
        //chama hook update
        //await setUpdate(update+1);
        //fecha o MUI dialog
        handleClose();
        }
     catch (error) {
        console.log(error);
    }
    };
    //faz o fetch usando uma função service dos canais a ser selecionado para ser associado pela publicação
    useEffect(() => {
      async function getChannels(){
       const channels = await GetChannels(2);
       setCanais(channels);
       
      }

      getChannels();
     },[]);
     //funcao para transforma file em base 64
     function getFiles(File){
      console.log(File.base64)
      return File.base64
    }
    return ( 
    <div className={`flex flex-initial gap-4 items-center  justify-between bg-white mt-2 p-2  w-full h-auto rounded-md sm:max-w-lg lg:max-w-2xl xl:max-w-4xl`}>
            {/*titulo*/}
                <h1 className='text-xs font-extralight'>Add publication</h1>
                
        
      
                <div className="flex items-center justify-center justify-items-center ">
                        <button className=' flex w-6 h-6 items-center justify-center bg-ipt rounded-md'onClick={handleClickOpen}>
                            <AddSharpIcon sx={{ color: 'white', fontSize: 20}}></AddSharpIcon>
                        </button>
                </div>
                {/*MUI dialog*/}
                <Dialog
                /*proporcão escolhida*/
                fullWidth={"sm"}
                maxWidth={"sm"}
                /*dialog status*/
                open={opend}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                
                >
                        <DialogTitle id="alert-dialog-title">
                        {"Comments"}
                        </DialogTitle>
                        {/*MUI (Box) component usado para fazer o encapsulamento do form (formulario)*/}
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                        <DialogContent >
                        <DialogContentText id="alert-dialog-description">
                        </DialogContentText>
                        <Select
                        id="listaCanais"
                        value={canal.canal_id}
                        name="canal"
                        fullWidth
                        onChange={handleChange}
                        autoWidth
                        label="Canal"
                        >
                        {canais.map((canal) =>
                                <MenuItem key={canal.canal_id} value={canal.canal_id}>
                                  {canal.nome}
                                </MenuItem>
                              )}
                        </Select>
                        {/* MUI input componet para receber o titulo da publicação*/}
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="titulo"
                            label="titulo"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="titulo"
                        />
                        {/* MUI input componet para receber a imagem da publicação*/}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="tmagem"
                            name="imagem"
                            label="Imagem"
                            type="file"
                            
                            
                            variant="standard"
                        />
                        <h2 className='ml-2 my-2'>Messagem</h2>
                        {/* MUI input componet para receber a mensagem da publicação*/}
                        <TextField
                            autoFocus
                            required
                            id="menssagem"
                            defaultValue={""}
                            multiline
                            rows={4}
                            fullWidth
                            type="text"
                            name="menssagem"
                            
                        />                   
                        </DialogContent>
                        <DialogActions>
                        {/* MUI (Button) componet para fazer o submit do form */}
                        <Button type="submit">Post</Button>
                        {/* MUI (Button) componet para fazer o componte dialog */}
                        <Button onClick={handleClose} autoFocus>Close</Button>
                        </DialogActions>
                        </Box>
      </Dialog>
    </div>
    )
}
export default AddPost