import React, { useState } from 'react'
import SubForum from './SubForum'
const channels = [
  {
  notification:2,
  name:"redes",
  },
  {
    notification:0,
    name:"Interface Web",
  },
  {
    notification:3,
    name:"base De Dados"
  }

]

function Drawerl(){
  const [open, setOpen] = useState(false);
    return (
      <div className='realtivo w-10 md:w-20'>
        <div className={` flex ${open ?'w-4/5 md:w-72 ' : 'w-10 md:w-20'}  duration-300  h-screen bg-pale_purple absolute rounded}`} onMouseOver={(e) => {setOpen(true)}} onMouseLeave={()=>{setOpen(false)}}>
          
                
                <div className="absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 rounded lg:hidden" onClick={()=>setOpen(!open)}></div>
                
               
                <div className='flex flex-col flex-nowrap'>
                <div>
                  <h1 className={`text-white origin-left font medium text-x1`}>INIC</h1>
                </div>
                  {channels.map( (element) => (
                    <>
                    
                    <SubForum {...element}></SubForum>  
                    </>     
                  ))}
                </div>
                  
                
        </div>
        </div>
    )
  }

export default Drawerl
/*
                
                //list item list itembutton
*/