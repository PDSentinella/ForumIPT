import React, { useState } from 'react'
const channels = [
  {
  notification:2,
  name:"redes",
  img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0",
  },
  {
    notification:0,
    name:"Interface Web",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0",
  },
  {
    notification:3,
    name:"Base De Dados",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0"
  },
  ,
  {
    notification:2,
    name:"Estrutura De Dados",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0"
  }
  ,
  {
    notification:3,
    name:"AC",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0"
  }
]


function Drawerl(props){
  const [open, setOpen] = useState(true);
    return (
      <div className='flex flex-col  items-center pt-2 overflow-y-auto h-full '>
        <div className='flex cursor-pointer pb-2 '>
          <h1 className={`text-white ${!props.open ?'hidden':'pr-4'} cursor-pointer`}>Courses ({channels.length})</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  PencilIcon color='#ffffff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 self-center ${!props.open && 'hidden'} ${open&&'rotate-180'} `} onClick={()=>setOpen(!open)}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className={`${!open ? 'hidden':''} flex `}>
            <ul className=''>
            {channels.map( (channel) => (
              <li key={channel.name} className='flex pb-2 gap-2'>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#ffffff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  <h1 className={`text-white ${!props.open && 'hidden'} cursor-pointer`}>{channel.name}</h1>

              </li>     
            ))}
               
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
