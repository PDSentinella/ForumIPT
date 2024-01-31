import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { getPublicationComments } from '../services/publication.api';
import CircularProgress from '@mui/material/CircularProgress';



function CommentsDialog(props) {
  //hooks
 const [comments,setComments] = useState(null);//hook para receber os comentarios
 const [publication_id,setPublication_id] = useState(props.publication_id)//hook para receber a propriedade publication_id
 //função que por meio de uma função service faz o recebe os comentarios de uma publicação especifica
 async function getComments(){
   const c =  await getPublicationComments(publication_id);
   console.log(c)
   setComments(c);
 }
 //chama o getComments
 useEffect(() => {
    getComments();
},[]);
  return (
    <div>
       {/*MUI component */}  
      <CssBaseline />
      <List>
        {/*Se o fetch ainda não tiver sido feito mostra uma roda circular, se tiver comentario, mostramos os comentarios, caso o contrario não mostramos nada */}
        {comments==null?(<div className='flex-col'><div className='flex w-1/2'></div><div className='flex'><div className='w-full h-20 '></div><CircularProgress color="success" /><div className='w-full h-20 flex'></div></div></div>):
        comments.length==0?<div className='flex mt-8 w-full   justify-center items-center'><h1 className='text-xs font-extralight text-center'>{/*Esta publicação não tem comentários*/}</h1></div>:
        (comments.map((comment,index)=>(
          /*MUI compontes*/
          
          <ListItemButton key={index }>
          <ListItemAvatar>
            {/*MUI avatar mostra a imagem do user o qual fez o comentario*/}
            <Avatar alt="Profile Picture" src={comment.profile_image} />
          </ListItemAvatar>
          <ListItemText primary={comment.nome} secondary={comment.comentario} />
        </ListItemButton>
        )))}
      </List>

    </div>
  );
}
export default CommentsDialog



