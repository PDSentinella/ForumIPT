import React,{useState, useEffect} from 'react'
import UserCard from '../Components/UserCard'
import SideBar from '../Components/SideBar'
import Bar from '../Components/Bar'
import UserInfo from '../Components/UserInfo'
import UserSaved from '../Components/UserSaved'
import CircularProgress from '@mui/material/CircularProgress';
import { getUserData } from '../services/publication.api'

function UserProfilePage(props) {
  async function getUser() {
    const userdata = await getUserData(JSON.parse(localStorage.user).user_id)
    console.log(userdata);
    setUserProfilePage(userdata);
  }
  useEffect(() => {
    getUser()
  },[]);
  const [userProfilePage,setUserProfilePage] = useState();
  const [selected, setSelected] = useState(window.location.pathname.replace("/profile/",""));
  return (
    <>
    
    <div className='h-full relative top-0'>
      <div className="flex  h-screen w-full ">

        <SideBar></SideBar>
        {typeof userProfilePage =="object"?<><div className={` flex flex-col bg-background-gray  items-center sm:px-16 px-8  flex-1 h-full  w-full overflow-y-auto`}>
            {typeof userProfilePage =="object" && <UserCard user={userProfilePage}></UserCard>}    
            {/*content appear div*/}
            <div className='w-full mt-4 self-center'>
            {/*<div className={` relative  border-2  ${selected=='info' && 'w-24 left-36'} ${selected=='g' && 'w-24 left-56'} `}></div>*/}
              <div className=' flex items-center  w-full justify-around border-t '>
                <button className={` flex justify-center items-center p-1 gap-x-1 ${selected ==='info'&& 'border-t-2'}`} onClick={()=>{setSelected('info')}} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                  <h1 className='absolute invisible sm:visible sm:relative '>Informações</h1></button> 
                <button className={`flex justify-center items-center p-1 gap-x-1 ${selected ==='g'&& 'border-t-2'}`} onClick={()=>{setSelected('g')}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                  <h1 className='absolute invisible sm:visible sm:relative '>Guardados</h1>
                </button>
                <button className={`flex justify-center items-center p-1 gap-x-1 ${selected ==='cv'&& 'border-t-2'}`} onClick={()=>{setSelected('cv')}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                <h1 className='absolute invisible sm:visible sm:relative '> CV/Resume</h1>
                </button>
              </div>
              {/* content bellow chooser content*/}
              <div className='flex justify-center items-center mb-16'>
                {typeof userProfilePage =="object"? (selected==='info'?(<UserInfo user={userProfilePage} ></UserInfo>):selected==='g'?(<UserSaved user={userProfilePage}></UserSaved>):selected==='cv'&&(<div>resume</div>)):<CircularProgress color="success" />}
                
              </div>
            </div>  
        </div></>:<div className='flex w-full h-96'><div className=' w-1/2'></div><CircularProgress color="success" /></div>}
      </div>
      </div>
      <div className=' sm:hidden absolute bottom-0  w-full bg-ipt'>
        <Bar></Bar>
      </div>
    </>
  )
}

export default UserProfilePage