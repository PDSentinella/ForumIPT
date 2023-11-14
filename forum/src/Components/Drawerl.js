import React from 'react'
import Icon from './SubForum'
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
      <div className=' flex flex-col h-full w-40 p-10 bg-cadet-gray'>
        <div className='flex'>side bar</div>
        <ul>
        {channels.map( (element) => (
           <incons>{element.name}</incons>          
        ))}
        </ul>
      </div>
    )
  }

export default Drawerl