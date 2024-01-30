import React, {useState,useEffect} from 'react'
import Post from '../Components/Post'
import CircularProgress from '@mui/material/CircularProgress';

import UserSavedGroupsCard from './UserSavedGroupsCard'
import { getUserSavedPublication } from '../services/publication.api';
const canais = [
  "base de dados",
  "POO",
  "AC",
  "EDA",
  "Probabilidades Estastisticas",
  "InterfaceWeb"
]
const UserSaved = (props) => {
  const [publications,setPublications] = useState(null);
  const [publicationcount, setPublicationcount] = useState(0);

  useEffect(() => {
    getPublication()
  },[]);
async function getPublication(){
  const user = JSON.parse(localStorage.getItem("user"));
  const page = publicationcount
  const p = await getUserSavedPublication(user.user_id,page);
  console.log(page);
  setPublications(p);
}

  return (
    <div className='flex flex-col justify-center mx-4 pt-14 items-center'>
        <div className='w-full pb-4'>
        </div>
        <div className='flex items-center justify-center'> 
            <div className={` ${canais.length!=0&&'hidden'}`}>
              <h3 className='text-sm font-bold text-center'> You dont have any saved Publications yet</h3>
            </div>
            <div className={`flex items-center justify-center `}>
                {publications === null?(<><div className='w-full h-48 '></div><CircularProgress color="success" /><div className='w-full h-96 flex'></div></>):
              ((publications==undefined)?<div className='flex w-full h-96 justify-center items-center'><h1 className='text-center'>Não tem publicações neste canal</h1></div>:
                (publications.map((publication) => (
                  <Post publicacao={publication}></Post>
                )) 
                ))}
            </div>
        </div>
    </div>
  )
}

export default UserSaved