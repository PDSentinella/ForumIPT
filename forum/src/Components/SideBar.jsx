import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Drawerl from './Drawerl';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GetAllChannels } from "../services/channels.api";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@mui/material";
import { RegisterChannel } from "../services/channels.api";
import SucessAlert from "./SucessAlert";
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
//instagram side bar, quando a screen é grande o suficiente a side bar expande de vez, podemos recriar algo parecido usando xs-max: ou algo do genero, tentar
function SideBar(props){
    const [open, setOpen] = useState(props.openSideBar?props.openSideBar:false);
    const [openDialog, setOpenDialog] = useState(false);

   /*Variaveis para receber os canais, de modo a que no dialo possam ser escolhidos*/
    const [canais, setCanais] = useState([]);
    
    const [canal, setCanal] = useState({ canal_id: 1, nome: "Engenharia. Informática" });

    const [alertOpen, setAlertOpen] = useState(false);

    const handleChange = (event) => {
        // vai ao array canais e seleciona o canal correspondente pelo id.
        const selectedCanalId = event.target.value;
        const selectedCanal = canais.find((canal) => canal.canal_id === selectedCanalId);
        setCanal(selectedCanal);
      };
      function handleOpen(){
      
        setOpen(!open)
       
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
            await RegisterChannel(formJson);
            setAlertOpen(true);
            setTimeout(() => { 
                window.location.reload();
              }, 1000);
        }catch(error){

        }
      }
      
 
      useEffect(() => {
       async function getChannels(){
        const channels = await GetAllChannels();
        setCanais(channels);
        
       }

       getChannels();
       setOpen(props.open)
      },[props.open]);

      return (
        <>
        {/*Side Bar*/}
        <div className={`w-12 sm:w-16  flex `} onMouseOver={(e) => {setOpen(true)}} > {/*${open &&'w-0 '} sm:w-16*/}{/*w-0 sm:w-16*/}
        {/*Abre e fecha a side bar*/}
            <div className={`${open ?'w-72 absolute': 'w-12 sm:w-16  '} absolute duration-300 h-full bg-ipt overflow-y-auto z-20 `} onMouseOver={(e) => {setOpen(true)}} onMouseLeave={()=>{setOpen(false)}}>
                <div className={`flex  cursor-pointer items-center justify-center w-full gap-x-6 pt-8`}>
                  {/*Abre e fecha a side bar para dispositivos de toque*/}
                    <div className={`  w-8 h-8  items-center justify-center border-pale_purple rounded`} onClick={()=>handleOpen()}>
                      {/*MUI incon*/}
                      <DehazeSharpIcon sx={{ color: 'white', fontSize: 32}}></DehazeSharpIcon>
                    </div>
                    <h1 className={`${!open && 'hidden'} duration-500 text-4xl text-white font-bold`}>FORUM</h1>  
                </div>

                
            <div className={`flex flex-col flex-1 justify-center gap-y-6 pt-8 ${!open ?'items-center w-full ':'items-start ml-14 w-62'}`}>

                <Link to="/User" reloadDocument><div className={`flex gap-x-2 justify-center cursor-pointer `}>
                        <div className={` flex rounded items-center justify-center w-6 h-6 `}>
                          <HomeOutlinedIcon sx={{ color: 'white', fontSize: 32}}/>  
                        </div>

                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Home</h1>
                    </div>
                </Link> 
                    {/*Home*/}
                    
                    <Link to="/Chat" reloadDocument><div className='flex gap-x-2 items-center cursor-pointer'>
                        <div className=' flex rounded items-center justify-center w-6 h-6 '>
                        <MessageOutlinedIcon sx={{ color: 'white', fontSize: 32}}/>  
                        </div>

                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Mensagens</h1>
                    </div>
                    </Link>                     
                    {/*Your treads*/}
                    <Link to="/profile/g" reloadDocument>
                    <div className='flex gap-x-2 items-center cursor-pointer '>
                        <div className=' flex rounded items-center justify-center w-6 h-6 '>
                        <BookmarkAddedOutlinedIcon sx={{ color: 'white', fontSize: 32}}/>  
                        </div>
                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Saved</h1>
                    </div>  
                    </Link>
                    {/*Saved*/}
                    {/*Drawerl*/}
                    <Drawerl open={open}></Drawerl>
                    
                </div>
                <Tooltip title="Junta-te a um canal">
                    <button onClick={() => { setOpenDialog(true)}} className={` flex gap-2 p-3 place-self-end self-center mt-8 ml-14 bg-white text-ipt rounded ${!open && 'hidden'}`}>
                    <PersonAddAltSharpIcon></PersonAddAltSharpIcon>
                        Regista canal
                    </button>
                </Tooltip>
            </div>
           
        </div>

            <Dialog
            open={openDialog}
            onClose={handleClose}
            PaperProps={{
            component: 'form',
            onSubmit: (event) => {
                event.preventDefault();
                let user = JSON.parse(localStorage.getItem('user'));
                const formData = new FormData(event.currentTarget);
                formData.set('canal_id', JSON.stringify(canal.canal_id));
                formData.append('user_id', JSON.stringify(user.user_id));
                const formJson = Object.fromEntries(formData.entries());
                console.log(formJson)
                sendInfo(formJson);
                handleClose();

            },
            }}
            >
            {
                canal.nome !== '' ?  <DialogTitle className="font-bold">Inscrição no canal {canal.nome}</DialogTitle> :
                <DialogTitle className="font-bold">Inscrição</DialogTitle>
            }

            <DialogContent>
            <DialogContentText>
                Inscreve-se num canal aqui. Basta selecionar o mesmo e inserir a respetiva senha recebida no seu mail!
            </DialogContentText>
            <Box className="flex-col sm:!flex">
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                id="listaCanais"
                value={canal.canal_id}
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
            </FormControl>
            <TextField            
                autoFocus
                required
                margin="dense"
                id="senha"
                name="senha"
                label="Senha"
                type="senha"
                variant="standard"
            />
            </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Inscrever</Button>
            </DialogActions>
            </Dialog>
            <SucessAlert open={alertOpen} handleClose={handleCloseAlert} />
        </>

      )
    }

       
    
export default SideBar;