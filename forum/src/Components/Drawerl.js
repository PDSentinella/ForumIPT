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
    name:"Base De Dados"
  },
  ,
  {
    notification:2,
    name:"Estrutura De Dados"
  }
  ,
  {
    notification:3,
    name:"AC"
  }
]

function Drawerl(props){
  const [open, setOpen] = useState(true);
    return (
      <div className='flex flex-col  justify-center pt-2  '>
        <div className='flex'>
          <h1 className={`text-pale_purple ${!props.open ?'hidden':'pr-4'}`}>Courses ({channels.length})</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  PencilIcon color='#F0E4FFff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${open&&'rotate-180'} `} onClick={()=>setOpen(!open)}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className={`${!open && 'hidden'} flex`}>
            <ul>
              <li>
                  <h1>{channels[0].name}</h1>
              </li>   
            </ul>
        </div>


        
      </div>
    )
  }
/*
<div className={` flex ${open ?'w-4/5 justify-center md:w-72  ' : 'hidden'}  duration-300  h-screen bg-pale_purple absolute rounded}`} onMouseOver={(e) => {setOpen(true)}} onMouseLeave={()=>{setOpen(false)}} >
<div className='flex flex-col flex-nowrap align-middle'>
<div>
  <h1 className={`text-white origin-left font medium text-x1`}>FORUM </h1>
</div >
  {channels.map( (element) => (
    <>
    
    <SubForum open={open} name = {element.name} notificaiton = {element.notificaiton}></SubForum>  
    </>     
  ))}
</div>
</div>
*/
/*
<div  className='flex h-full  pt-4  flex-col  '>
          <div className='flex flex-initial  gap-4 mb-2   items-center p-1 rounded'>
            <div className="flex flex-initial h-8 w-8 m-2  border p-1 rounded " onClick={()=>setOpen(!open)} ></div>
          </div>
          <div className='flex flex-1 flex-nowrap flex-col h-10 w-full'>
          {channels.map( (element) => (
            <>
              <SubForum open={open} name = {element.name} notificaiton = {element.notificaiton}></SubForum>  
            </>     
          ))}
          </div>
        </div>
<div className={` flex ${open ?'w-4/5  md:w-72   ' : 'hidden'}  absolute  h-screen bg-space_cadet rounded`}>
            <div className='    w-full h-full left-20 flex relative'>
              <div className="absolute left-10  pt-4 ">
                <div className=" cursor-pointer w-9 h-9 border-2 rounded  " onClick={()=>setOpen(!open)} ></div>
              </div>
            </div> 
            
        </div>
*/


export default Drawerl
/*
                
                //list item list itembutton
*/