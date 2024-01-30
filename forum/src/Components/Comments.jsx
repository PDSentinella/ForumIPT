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
 const [comments,setComments] = useState(null);
 const [publication_id,setPublication_id] = useState(props.publication_id)
 async function getComments(){
   const c =  await getPublicationComments(publication_id);
   setComments(c);
 }
 useEffect(() => {
    getComments();
},[]);
  return (
    <div>
         
      <CssBaseline />
      <List>
        {comments==null?(<div className='flex-col'><div className='flex w-1/2'></div><div className='flex'><div className='w-full h-20 '></div><CircularProgress color="success" /><div className='w-full h-20 flex'></div></div></div>):(comments.map((comment,index)=>(
          <ListItemButton key={index }>
          <ListItemAvatar>
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



