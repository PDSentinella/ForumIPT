import React, {useState,useEffect} from 'react'
import Post from '../Post'
import CircularProgress from '@mui/material/CircularProgress';

import UserSavedGroupsCard from './UserSavedGroupsCard'
const canais = [
  "base de dados",
  "POO",
  "AC",
  "EDA",
  "Probabilidades Estastisticas",
  "InterfaceWeb"
]
const UserSaved = (props) => {
  const [publications,setPublications] = useState([]);
  useEffect(() => {
    
  },[]);


  return (
    <div className='flex flex-col justify-center mx-4 pt-14 items-center'>
        <div className='w-full pb-4'>
        </div>
        <div className='flex items-center justify-center'> 
            <div className={` ${canais.length!=0&&'hidden'}`}>
              <h3 className='text-sm font-bold text-center'> You dont have any saved Publications yet</h3>
            </div>
            <div className={`flex flex-wrap gap-2 items-center justify-center md:grid md:grid-cols-3 ${canais.length==0&&'hidden'}`}>
            
            </div>
        </div>
    </div>
  )
}

export default UserSaved