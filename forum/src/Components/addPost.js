import React, {useState} from 'react'

function AddPost(props){
    const [open, setOpen] = useState(false);
    return ( 
    <div className={`flex flex-initial gap-4 items-center  justify-between bg-white mt-2 p-2  w-full h-auto rounded-md `}>
            {/*titulo*/}
                <h1 className='text-xs font-extralight'>Add publication</h1>
                <div className="flex items-center justify-center ">
                    <button className='w-6 h-6 bg-ipt rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#F0E4FFff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>


                    </button>
                </div>
    </div>
    )
}
export default AddPost