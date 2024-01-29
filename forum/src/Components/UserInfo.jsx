import React, {useState, useEffect} from 'react'
import { GetChannels } from '../services/channels.api';
/*const canais = [
    "base de dados",
    "POO",
    "AC",
    "EDA",
    "Probabilidades Estastisticas",
    "InterfaceWeb"
] */
const UserInfo = (props) => {
    const [userInfo,setUserInfo] = useState(props.user);
    const [canais,setCanais] = useState([])
    useEffect(() => {
        async function fetchChannels() {
            let user = JSON.parse(localStorage.getItem('user'));
            const channels = await GetChannels(user.user_id);
            setCanais(channels);
          }
        
          //fetchChannels();
        
      },[]);
    
  return (
    <div className='flex flex-col justify-between p-4 lg:gap-y-16 items-center w-full h-full gap-y-8 pt-16'>
        <h3>{userInfo.email}</h3>
        <div className='flex flex-wrap items-center lg:flex-co justify-center gap-y-8  py-8 pb-18'>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Telephone</h3>
                <h3 className='font-bold'>{userInfo.telefone}</h3>
            </div>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Location</h3>
                <h3 className='font-bold'>{userInfo.location}</h3>
            </div>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Job Title</h3>
                <h3 className='font-bold'>{userInfo.job}</h3>
            </div>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Accont</h3>
                <h3 className='font-bold'>{userInfo.atype}</h3>
            </div>            
        </div>
            <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col w-full pb-8 items-start justify-center '>
                    <h3 className='text-2x '>About Me</h3>
                    <p className='font-light text-justify'>{userInfo.aboutMe}</p>
            </div>

            <div className='w-full flex flex-col py-8 items-start gap-4'>
                <h1 className='text-2x'>Canais Incritos</h1> 
                <div className='flex flex-wrap gap-x-2 gap-y-2'>
                    {canais.map((canal)=>(
                        <div className='  cursor-pointer text-xs text-alice-blue px-2 py-1 rounded-full bg-ipt'>{canal}</div>
                    ))}
                </div>
            </div>
            </div>
    </div>
  )
}

export default UserInfo