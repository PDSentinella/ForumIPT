import react from 'react'
import React, { useState } from 'react'



function SideBar(){
    const [open, setOpen] = useState(false);
      return (
        <div className='w-16 flex relative'>
            <div className=''>
            <div className={`${open ?'w-72 absolute': 'w-16 relative'} absolute duration-300 h-screen bg-ipt `} onMouseOver={(e) => {setOpen(true)}} onMouseLeave={()=>{setOpen(false)}}>
                <div className='flex  cursor-pointer items-center justify-center w-full gap-x-6 pt-8 '>
                    <div className={`lg:hidden  w-8 h-8  items-center justify-center border-pale_purple rounded`} onClick={()=>setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:hidden  w-8 h-8  items-center justify-center border-pale_purple rounded" onClick={()=>setOpen(!open)}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <h1 className={`${!open && 'hidden'} duration-500 text-4xl text-pale_purple font-bold`}>FORUM</h1>  
                </div>
                <di className='flex flex-col cursor-pointer items-center justify-center w-full gap-8 pt-8'>
                    <h1 className='text-pale_purple'>Start</h1>
                    <h1 className='text-pale_purple'>Start</h1>
                </di>
            </div>
            </div>
           
        </div>
      )
    }

export default SideBar;