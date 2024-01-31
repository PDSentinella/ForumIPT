import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CommentsDialog from './Comments';
import { Box } from '@mui/material';
import { addComments } from '../services/publication.api';


    



function AddComment(props){
  //hooks  
    const [opend, setOpend] = React.useState(false);//dialog open status hook
    const [reload,setReload] = React.useState(0);// relaod comments hook (not used)


    //MUI dialog handles open dialog status (using opend hook)
    const handleClickOpen = () => {
      setOpend(true);
    };
    //MUI dialog handles close dialog status (using opend hook)
    const handleClose = () => {
      setOpend(false);
    };
    //função para fazer o render só dos comentarios
    const reloadComments = () =>{
      let r = reload +1;
      setReload(r)
    };
    //tenta fazer o post de um comentario pela função de service
    const handleSubmit = async (event) => {
      event.preventDefault();
      //form
      const data = new FormData(event.currentTarget);
      try {
        //data para mandar ao backend para fazer um comentario
        const user = JSON.parse(localStorage.getItem("user"))
        let CommentData = {
          "user_id":user.user_id,
          "publication_id":props.publication_id,
          "comentario":data.get("comentario"),
          
        }
        //chama a função de service que chama alguma função no backend
        const result = await addComments(CommentData);
        //fecha o dialog
        handleClose();
        }
     catch (error) {
      //previni algum eventual error
        console.log(error);
    }
    };
    return ( 
    <div className={`flex flex-initial gap-4 items-center  justify-between bg-white mt-2 p-2  w-full h-auto rounded-md sm:max-w-lg lg:max-w-2xl xl:max-w-4xl`}>
                
        
                {/*botao que abre o dialog */}
                <div className="flex items-center justify-center ">
                    <button className='flex py-1 px-2 justify-center items-center bg-ipt rounded-full' onClick={handleClickOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#FFFFFF' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                            <h3 className='text-white text-xs mr-1'>Comment</h3>
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
                       {/* dialog actions, dialogtitle e dialogcontent tens as suas perculiaridades de estilo
                          como posição e tipo de display. Lembra de usar (!) important se nescessário
                        */}
                        <DialogActions>
                          {/* titulo*/}
                          <DialogTitle id="alert-dialog-title">
                            <h1>Comments</h1>
                          </DialogTitle>
                        </DialogActions>
                        {/*MUI (Box) component usado para fazer o encapsulamento do form (formulario)*/}
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                        <DialogContent>
                          <DialogActions>
                            {/* MUI input componet para receber a mensagem do comentario*/}
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="comentario"
                                name="comentario"
                                label="Comentario"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <Button type="submit">Post</Button>
                          </DialogActions>
                        {/* Nosso componente que da-nos a lista de comentários */}
                        <CommentsDialog publication_id = {props.publication_id}/>
                        </DialogContent>
                        </Box>
                        <DialogActions>
                          {/* MUI (Button) componet para fazer o componte dialog */}
                        <Button onClick={handleClose} autoFocus>Close</Button>
                        </DialogActions>
        {/*fim do dialog*/}
      </Dialog>
    </div>
    )
}
export default AddComment