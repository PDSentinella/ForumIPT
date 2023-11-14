import React from 'react'
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
    return (

      <div className='flex'>
        
              <div className={`w-72 h-screen bg-pale_purple relative`}>
               <div className="absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 rounded"></div>
              
              </div>
                
              
      </div>
    )
  }

export default Drawerl
/*
                {channels.map( (element) => (
                  <>
                  
                  <SubForum {...element}></SubForum>  
                  </>       
                ))}
*/