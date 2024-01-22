import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CommentsDialog from './Comments';


    



function AddPost(props){
    const [opend, setOpend] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpend(true);
    };
  
    const handleClose = () => {
      setOpend(false);
    };
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
                maxWidth={"lg"}
                open={opend}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                        <DialogTitle id="alert-dialog-title">
                        {"Comments"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="Titulo"
                            name="Titulo"
                            label="Titulo"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                         <DialogActions>
                        
                        </DialogActions>
                         
                       
                        </DialogContent>
                        <DialogActions>
                        <Button color="primary"  onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                        </DialogActions>
      </Dialog>
    </div>
    )
}
export default AddPost