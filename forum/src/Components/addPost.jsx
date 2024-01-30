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


    



function AddPost(props){
    const [opend, setOpend] = React.useState(false);
    const [canais, setCanais] = useState([]);
    const [canal, setCanal] = useState({ });
    const [update,setUpdate] = useState(1);

    const handleChange = (event) => {
      // vai ao array canais e seleciona o canal correspondente pelo id.
      const selectedCanalId = event.target.value;
      const selectedCanal = canais.find((canal) => canal.canal_id === selectedCanalId);
      setCanal(selectedCanal);
    };
    const handleClickOpen = () => {
      setOpend(true);
    };
  
    const handleClose = () => {
      setOpend(false);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      try {
        console.log(data.get("canal"));
        let publicationData = {
          "user_id":JSON.parse(localStorage.getItem("user")).user_id,
          "canal":data.get("canal"),
          "titulo":data.get("titulo"),
          "msg":data.get("menssagem")
                        }
        console.log(publicationData)
        const response = await addPublication(publicationData)
        console.log(response)
        await setUpdate(update+1);
        handleClose();
        }
     catch (error) {
        console.log(error);
    }
    };
    useEffect(() => {
      async function getChannels(){
       const channels = await GetChannels(2);
       setCanais(channels);
       
      }

      getChannels();
     },[]);

     function getFiles(File){
      console.log(File.base64)
      return File.base64
    }
    return ( 
    <div className={`flex flex-initial gap-4 items-center  justify-between bg-white mt-2 p-2  w-full h-auto rounded-md sm:max-w-lg lg:max-w-2xl xl:max-w-4xl`}>
            {/*titulo*/}
                <h1 className='text-xs font-extralight'>Add publication</h1>
                
        
      
                <div className="flex items-center justify-center ">
                        <button className='w-6 h-6 bg-ipt rounded-md'onClick={handleClickOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#F0E4FFff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                </div>
                <Dialog
                fullWidth={"sm"}
                maxWidth={"sm"}
                open={opend}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                
                >
                        <DialogTitle id="alert-dialog-title">
                        {"Comments"}
                        </DialogTitle>
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
                        <img></img>
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
                        
                         <DialogActions>
                        
                        </DialogActions>
                         
                       
                        </DialogContent>
                        <DialogActions>
                        <Button type="submit">Post</Button>
                        <Button onClick={handleClose} autoFocus>Close</Button>
                        </DialogActions>
                        </Box>
      </Dialog>
    </div>
    )
}
export default AddPost