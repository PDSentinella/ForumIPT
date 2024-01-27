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
                fullWidth={"sm"}
                maxWidth={"sm"}
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
                        <h2 className='ml-4 my-2'>Nome</h2>
                        <TextField
                            autoFocus
                            required
                            id="Nome"
                            defaultValue={userEditProfilePage.nome}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>Email</h2>
                        <TextField
                            autoFocus
                            required
                            id="Email"
                            defaultValue={userEditProfilePage.email}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>Telefone</h2>
                        <TextField
                            autoFocus
                            required
                            id="Telefone"
                            defaultValue={userEditProfilePage.Telefone}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>Location</h2>
                        <TextField
                            autoFocus
                            required
                            id="Location"
                            defaultValue={userEditProfilePage.Locations}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>JobTitle</h2>
                        <TextField
                            autoFocus
                            required
                            id="jobtitle"
                            defaultValue={userEditProfilePage.jobtitle}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>About Me</h2>
                        <TextField
                            autoFocus
                            required
                            id="aboutme"
                            defaultValue={userEditProfilePage.aboutme}
                            multiline
                            rows={4}
                            fullWidth
                            type="text"
                            
                        />
                        {/*<TextField
                            margin="dense"
                            fullWidth
                            variant="standard"
                        />/*/}
                        
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