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

function Drawerl(){
  const [open, setOpen] = useState(true);
    return (
      <div className='flex w-20 md:w-20 h-screen justify-center static'>
        <div  className='flex h-full  pt-4  flex-col  '>
          <div className='flex flex-initial  gap-4 mb-2 realtive  items-center p-1 rounded'>
            <div className="flex  top-4 h-8 w-8 m-2  absolute border p-1 rounded " onClick={()=>setOpen(!open)} ></div>
          </div>
          <div className='flex flex-1 flex-nowrap flex-col h-10 w-full'>
          {channels.map( (element) => (
            <>
              <SubForum open={open} name = {element.name} notificaiton = {element.notificaiton}></SubForum>  
            </>     
          ))}
          </div>
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