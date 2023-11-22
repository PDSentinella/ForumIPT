import React from 'react'
import UserSavedGroupsCard from './UserSavedGroupsCard'
const canais = [
    "base de dados",
    "POO",
    "AC",
    "EDA",
    "Probabilidades Estastisticas",
    "InterfaceWeb"
]
const UserSaved = () => {
  return (
    <div className='flex  justify-center mx-4 py-4 items-center'>
        <div></div>
        <div className='flex items-center justify-center'> 
            <div className='flex flex-wrap gap-2 items-center justify-center md:grid md:grid-cols-3'>
            {canais.map((canal)=>(
                        <UserSavedGroupsCard canal={canal}></UserSavedGroupsCard>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default UserSaved