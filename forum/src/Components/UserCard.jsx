import React, {useState, useEffect} from 'react'
import EditProfilePage from './EditProfilePage';

const UserCard = (props) => {
  //hooks
  const [userCard,setUserCard] = useState(props.user)//hook que recebe o user por props
  useEffect(() => {
    
  },[]);
  return (
    <div className='flex h-36 w-full  mx-4 py-4  justify-center'>            
                <div className='flex flex-auto items-center justify-center gap-x-3'>
                    {/*user image*/}
                    <div className='w-20 h-20  flex flex-none sm:mr-12 overflow-hidden rounded-full sm:w-28 sm:h-28'>
                        <img  className="w-20 h-20 sm:w-28 sm:h-28" src ={`${userCard.profile_image}`}></img>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-x-2 gap-y-1'>
                      {/* username*/}
                    <div className='flex gap-2 '>{/*justify-center*/}
                        <h1 className='mr-1 text-lg'>{userCard.nome}</h1>
                        
                    </div>
                    {/*nosso componete de editar o user*/}
                    <EditProfilePage user={userCard}></EditProfilePage>
                    </div>        
                </div>
    </div>
  )
}

export default UserCard