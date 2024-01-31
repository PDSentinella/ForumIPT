import React, {useState} from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Link } from 'react-router-dom';

function Bar(props){
    //hook
    const [open, setOpen] = useState(false);//hook que abre e fecha a side bar (não ultilizado)
    return ( 
    <div className={`flex flex-initial b-0 sm:hidden gap-12 items-center  justify-center bg-ipt   w-full h-10 rounded `}>
                    
                    {/* Menu*/}

                    <div className={`flex  justify-center cursor-pointer `} onClick={()=>{setOpen(open)}}>
                        <div className={` flex items-center justify-center bg-ipt w-6 h-6 `}>
                            {/*MUI Icon*/}
                            <MenuOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                        </div>
                    </div> 

                    {/* HomePage*/}
                    <div className={`flex  justify-center cursor-pointer `}>
                        {/*faz o redirecionamento para o homepage*/}
                        <Link to="/">
                            <div className={` flex rounded items-center justify-center w-6 h-6 `}>
                                {/*MUI Icon*/}
                                <HomeOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                            </div>
                        </Link>
                    </div> 

                    {/*Guardados*/}
                    
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                        {/*faz o redirecionamento para o userprofilepage publicações salvas*/}
                        <Link to="/">
                            <div className=' flex rounded items-center justify-center w-6 h-6 '>
                                {/*MUI Icon*/}
                                <BookmarkAddedOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                            </div>
                        </Link>
                    </div>                     
                    {/* Mensagens*/}
                    <div className='flex gap-x-2 items-center cursor-pointer '>
                        {/*faz o redirecionamento para o chat (ainda ñ implementado)*/}
                        <Link to="">
                            <div className=' flex rounded items-center justify-center w-6 h-6'>
                                {/*MUI Icon*/}
                                <MessageOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                            </div>
                        </Link>
                    </div> 
    </div>
    )
}
export default Bar