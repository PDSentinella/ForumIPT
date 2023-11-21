import React from 'react'

const UserCard = () => {
  return (
    <div className='flex h-32 w-full  mx-4 py-4 items-center'>
        <div className='w-20 h-20 mx-20 rounded'>
            <img  className="rounded-full w-20 h-20" src ="https://th.bing.com/th/id/R.8990dc1385002c34b0362bbb237d51f6?rik=oOfpgBe6O0etGA&pid=ImgRaw&r=0"></img>
        </div>
        <div>
            <div className='flex items-center'>
                <h1>Name</h1>
                <button>Editar Perfil</button>
                <button>Ver Aquivo</button>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard