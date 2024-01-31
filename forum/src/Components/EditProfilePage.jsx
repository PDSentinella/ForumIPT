import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { UpdateUserById } from '../services/DashBoard.api';


    



function EditProfilePage(props){
  //hooks
    const [opend, setOpend] = useState(false);//hook para o MUI dialog (open/close status)
    const [userEditProfilePage,setUserEditProfilePage] = useState(props.user);//hook receber por props e guarda o user
  //MUI dialog handles open dialog status (using opend hook)
    const handleClickOpen = () => {
      setOpend(true);
    };
    //MUI dialog handles close dialog status (using opend hook)  
    const handleClose = () => {
      setOpend(false);
    };
    //por entermedio de uma função de serviço faz a update de algumas propriedades do user
    const handleSubmit = async (event) => {
        event.preventDefault();
        //form 
        const data = new FormData(event.currentTarget);
        try {
          //test
          //console.log(data.get("nome"));
          //objecto json a ser enviado para fazer o post da publicaçao
          let userData = {
            "user_id":JSON.parse(localStorage.getItem("user")).user_id,
            "nome":data.get("nome"),
            "email":data.get("email"),
            "telefone":data.get("telefone"),
            "locations":data.get("locations"),
            "jobtitle":data.get("jobtitle"),
            "aboutme":data.get("aboutme"),
            'genero': JSON.parse(localStorage.getItem("user")).genero, 
            'admin_privileges': JSON.parse(localStorage.getItem("user")).admin_privileges
          }
          //test
          console.log(userData)
          const result = await UpdateUserById(userData);
          //se a resposta for do tipo 200
          if(result.ok){
            //faz o reload da pagina
            window.location.reload(false)
            //fecha o form
            handleClose();
          }
          //const response = await addPublication(publicationData)
          }
       catch (error) {
          console.log(error);
      }
      };
    return ( 
    <>
                <div className='flex gap-2'>  
                        <button className='text-sm sm:text-base text-black bg-white rounded px-2 py-1'onClick={handleClickOpen}>Editar Perfil</button>
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
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        </DialogContentText>
                        <h2 className='ml-4 my-2'>Nome</h2>
                        <TextField
                            autoFocus
                            required
                            name="nome"
                            id="Nome"
                            defaultValue={userEditProfilePage.nome}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>Email</h2>
                        <TextField
                            autoFocus
                            required
                            name="email"
                            id="Email"
                            defaultValue={userEditProfilePage.email}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>Telefone</h2>
                        <TextField
                            autoFocus
                            required
                            name="telefone"
                            id="Telefone"
                            defaultValue={userEditProfilePage.telefone}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>Location</h2>
                        <TextField
                            autoFocus
                            required
                            name="locations"
                            id="Location"
                            defaultValue={userEditProfilePage.locations}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>JobTitle</h2>
                        <TextField
                            autoFocus
                            required
                            name="jobtitle"
                            id="jobtitle"
                            defaultValue={userEditProfilePage.jobtitle}
                            fullWidth
                        />
                        <h2 className='ml-4 my-2'>About Me</h2>
                        <TextField
                            autoFocus
                            required
                            name="aboutme"
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
                        <Button type="submit" color="primary">Save</Button>
                        <Button onClick={handleClose} autoFocus>Close</Button>
                        </DialogActions>
                        </Box>
      </Dialog>
    </>
    
    )
}
export default EditProfilePage