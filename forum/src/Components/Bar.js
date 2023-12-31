import React, {useState} from 'react'

function Bar(props){
    const [open, setOpen] = useState(false);
    return ( 
    <div className={`flex flex-initial b-0 sm:hidden gap-12 items-center  justify-center bg-ipt   w-full h-10 rounded `}>
                    
                    <div className={`flex  justify-center cursor-pointer `}>
                        <div className={` flex rounded items-center justify-center bg-ipt border border-pale_purple w-6 h-6 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="" PencilIcon color='#F0E4FFff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div> 

                    <div className={`flex  justify-center cursor-pointer `}>
                        <div className={` flex rounded items-center justify-center bg-pale_purple w-6 h-6 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 place-self-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div> 
                    {/*Home*/}
                    
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                        <div className=' flex rounded items-center justify-center bg-pale_purple w-6 h-6 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>

                        </div>
                    </div>                     
                    {/*Your treads*/}
                    <div className='flex gap-x-2 items-center cursor-pointer '>
                        <div className=' flex rounded items-center justify-center bg-pale_purple w-6 h-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </div>
                    </div> 
    </div>
    )
}
export default Bar