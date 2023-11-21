import React from 'react'
const canais = [
    "base de dados",
    "POO",
    "AC",
    "EDA",
    "Probabilidades Estastisticas",
    "InterfaceWeb"
]
const UserInfo = () => {
  return (
    <div className='flex flex-col justify-between p-4 items-center w-full h-full gap-y-8 pt-16'>
        <h3>aluno24880@ipt.pt</h3>
        <div className='flex flex-wrap items-center  justify-center gap-y-8  py-8 pb-18'>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Telephone</h3>
                <h3 className='font-bold'>+351 960360141</h3>
            </div>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Location</h3>
                <h3 className='font-bold'>Tomar</h3>
            </div>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Job Title</h3>
                <h3 className='font-bold'>PR Reoresent</h3>
            </div>
            <div className='flex flex-col w-56 items-center'>
                <h3 className='font-light'>Accont</h3>
                <h3 className='font-bold'>Student</h3>
            </div>            
        </div>

            <div className='flex flex-col w-full pb-8 justify-center '>
                    <h3 className='text-2x '>About Me</h3>
                    <p className='font-light'>As my days went by, i found that loving and carraing are important, but there are also other important think in the world. Hello my name is Paulo i am a second year student of CS, and i am looking for a job. </p>
            </div>

            <div className='w-full flex flex-col py-8 items-start gap-4'>
                <h1>Canais Incritos</h1> 
                <div className='flex flex-wrap gap-x-2 gap-y-2'>
                    {canais.map((canal)=>(
                        <div className=' text-xs text-alice-blue px-2 py-1 rounded-full bg-ipt'>{canal}</div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default UserInfo