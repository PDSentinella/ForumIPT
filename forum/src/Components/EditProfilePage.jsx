import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


    



function EditProfilePage(props){
    const [opend, setOpend] = useState(false);
    const [userEditProfilePage,setUserEditProfilePage] = useState(props.user);
  
    const handleClickOpen = () => {
      setOpend(true);
    };
  
    const handleClose = () => {
      setOpend(false);
    };
    return ( 
    <>
                <div className='flex gap-2'>  
                        <button className='text-sm sm:text-base bg-pale_purple rounded px-2 py-1'onClick={handleClickOpen}>Editar Perfil</button>
                </div> 
                <Dialog
                maxWidth={"lg"}
                open={opend}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                        <DialogTitle id="alert-dialog-title">
                        {"Edit"}
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
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="Message"
                            name="Menssagem"
                            label="Message"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                         <DialogActions>
                        
                        </DialogActions>
                         
                       
                        </DialogContent>
                        <DialogActions>
                        <Button color="primary"  onClick={handleClose}>Save</Button>
                        <Button onClick={handleClose} autoFocus>Close</Button>
                        </DialogActions>
      </Dialog>
    </>
    
    )
}
export default EditProfilePage