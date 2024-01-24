import { Link } from "react-router-dom";
import React, { useState } from 'react'
import Drawerl from './Drawerl';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
//instagram side bar, quando a screen é grande o suficiente a side bar expande de vez, podemos recriar algo parecido usando xs-max: ou algo do genero, tentar
function SideBar(){
    const [open, setOpen] = useState(false);

      return (
        <div className={`${open &&'w-0 '} max-sm:hidden sm:w-16  flex `} onMouseOver={(e) => {setOpen(true)}} > {/*${open &&'w-0 '} sm:w-16*/}{/*w-0 sm:w-16*/}
            <div className={`${open ?'w-72 absolute': 'w-0 sm:w-16  '} max-sm:hidden absolute duration-300 h-full bg-ipt overflow-y-auto z-20 `} onMouseOver={(e) => {setOpen(true)}} onMouseLeave={()=>{setOpen(false)}}>
                <div className={`flex  cursor-pointer items-center justify-center w-full gap-x-6 pt-8`}>
                    <div className={`  w-8 h-8  items-center justify-center border-pale_purple rounded`} onClick={()=>setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="" PencilIcon color='#EEF4F8ff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <h1 className={`${!open && 'hidden'} duration-500 text-4xl text-white font-bold`}>FORUM</h1>  
                </div>

                <div className={`flex flex-col flex-1 justify-center gap-y-6 pt-8 ${!open ?'items-center w-full ':'items-start ml-14 w-62'}`}>
                <Link to="/" reloadDocument><div className={`flex gap-x-2 justify-center cursor-pointer `}>
                        <div className={` flex rounded items-center justify-center w-6 h-6 `}>
                          <HomeOutlinedIcon sx={{ color: 'white', fontSize: 32}}/>  
                        </div>

                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Home</h1>
                    </div>
                </Link> 
                    {/*Home*/}
                    
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                        <div className=' flex rounded items-center justify-center w-6 h-6 '>
                        <MessageOutlinedIcon sx={{ color: 'white', fontSize: 32}}/>  
                        </div>

                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Mensagens</h1>
                    </div>                     
                    {/*Your treads*/}
                    <div className='flex gap-x-2 items-center cursor-pointer '>
                        <div className=' flex rounded items-center justify-center w-6 h-6 '>
                        <BookmarkAddedOutlinedIcon sx={{ color: 'white', fontSize: 32}}/>  
                        </div>
                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Saved</h1>
                    </div>  
                    {/*Saved*/}
                    {/*Drawerl*/}
                    <Drawerl open={open}></Drawerl>
                    
                </div>
                <button className={` flex gap-2 p-3 place-self-end self-center mt-8 ml-14 bg-white text-ipt rounded ${!open && 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>

                    Join a new class
                </button>
            </div>
           
        </div>
      )
    }

       
    
export default SideBar;