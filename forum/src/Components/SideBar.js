import { Link } from "react-router-dom";
import React, { useState } from 'react'
import Drawerl from './Drawerl';
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
                <Link to={"/"} reloadDocument><div className={`flex gap-x-2 justify-center cursor-pointer `}>
                        <div className={` flex rounded items-center justify-center bg-white w-6 h-6 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 place-self-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>

                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Home</h1>
                    </div>
                    </Link> 
                    {/*Home*/}
                    
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                        <div className=' flex rounded items-center justify-center bg-white w-6 h-6 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>

                        </div>

                        <h1 className={`${!open&&'hidden'}  text-white font-bold tracking-wide`}>Your treads</h1>
                    </div>                     
                    {/*Your treads*/}
                    <div className='flex gap-x-2 items-center cursor-pointer '>
                        <div className=' flex rounded items-center justify-center bg-white w-6 h-6 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
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