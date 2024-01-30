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
    const [opend, setOpend] = React.useState(false);
    const [reload,setReload] = React.useState(0);
  
    const handleClickOpen = () => {
      setOpend(true);
    };
  
    const handleClose = () => {
      setOpend(false);
    };
    const reloadComments = () =>{
      let r = reload +1;
      setReload(r)
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      try {
        const user = JSON.parse(localStorage.getItem("user"))
        let CommentData = {
          "user_id":user.user_id,
          "publication_id":props.publication_id,
          "comentario":data.get("comentario"),
          
        }
        
        const result = await addComments(CommentData);
        handleClose();
        }
     catch (error) {
        console.log(error);
    }
    };
    return ( 
    <div className={`flex flex-initial gap-4 items-center  justify-between bg-white mt-2 p-2  w-full h-auto rounded-md sm:max-w-lg lg:max-w-2xl xl:max-w-4xl`}>
            {/*titulo*/}
                
        
      
                <div className="flex items-center justify-center ">
                    <button className='flex py-1 px-2 justify-center items-center bg-ipt rounded-full' onClick={handleClickOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#FFFFFF' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                            <h3 className='text-white text-xs mr-1'>Comment</h3>
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
                       
                        <DialogActions>
                        <DialogTitle id="alert-dialog-title">
                        <h1>Comments</h1>
                        </DialogTitle>
                        
                        </DialogActions>
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                        <DialogContent>
                       
                        
                         <DialogActions>
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
                         
                       
                        <CommentsDialog publication_id = {props.publication_id}/>
                        </DialogContent>
                        </Box>
                        <DialogActions>
                        <Button onClick={handleClose} autoFocus>Close</Button>
                        </DialogActions>
                        
      </Dialog>
    </div>
    )
}
export default AddComment