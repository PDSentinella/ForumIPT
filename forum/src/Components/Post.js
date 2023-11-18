import {useState} from 'react'
import React from 'react';
let publicacao = {
    titulo:"Date of the final exams",
    user:{name:"Paulo Santo",
        foto:""       
        },
    time:"2 hrs ago",
    msg:"Dear Students\n I want to indorm you that after 6 moths of our cooperation it is necessary to test you knowlege by th final exam, It means we need to find a date for our final exam, In this semester you were extremely under the stress due to",
    coments:[
    {
        user:{
                name:"Paulo",
                foto:"https://w0.peakpx.com/wallpaper/367/169/HD-wallpaper-heart-aesthetic.jpg",
                teacher:true
            },
        commentMsg:"Good after noon teacher. I think that 18 Dezember will be a good date to do the test",
        time:"2hrs ago",
        teacher:false
    }  ,

    {
        user:{
                name:"Toninho",
                foto:"",
                teacher:false
            },
        commentMsg:"Good afternoon. I think that 18 dezember will ber an excellent day to do our asigniment",
        time:"",
    },

            ]
}
function Post(props){
    const [open, setOpen] = useState(false);
    return ( 
    <div className={`flex flex-initial flex-col gap-4 bg-white mt-2 p-2  w-full h-auto rounded-md `}>
            {/*titulo*/}
            <h1 className='text-xl font-bold'>{publicacao.titulo}</h1>
            {/*user profile pic, name and publication date*/}
            <div>
                <div className='flex gap-x-2 '>
                    <img className="w-8 h-8" src="https://w0.peakpx.com/wallpaper/367/169/HD-wallpaper-heart-aesthetic.jpg" />
                    <div >
                        <h2 className='text-xs font-thin text-opacity-10'>{publicacao.user.name}</h2>
                        <h2 className="text-xs font-thin text-opacity-40">{publicacao.time}</h2>
                    </div>
                </div>

            </div>
            {/*messagem da publicacao */}
            <div>
                <p className='text-sm  font-extralight'>{publicacao.msg}</p>
            </div>
            {/* comment and save icons besides the number and opening of comments */}
            <div className='flex'>
                {/*comment and save icons*/}
                <div className='flex w-full gap-1'>
                        {/*save icon*/}
                        <div  className='flex p-1 justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </div>
                        {/*comment icon*/}
                        <button className='flex p-1 justify-center items-center bg-pale_purple rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                            <h3 className='text-ipt text-xs mr-1'>Add Coment</h3>
                        </button>
                    
                </div>
                {/*numbers of comments*/}
                <div className={`flex justify-end w-full ${open && 'hidden'}`}>
                    <div className={`flex ${publicacao.coments.length==0 && 'hidden'} bg-pale_purple rounded p-2 h-8 items-center justify-center`}>
                        <h3 className='text-ipt text-sm '>coments {publicacao.coments.length}</h3>
                    </div>
                </div>
            </div>
            {/*ivisible div that contains the comments is showed (it has to set comments to open*/}
            <div className={`${!open && 'hidden'}`}>

            </div>
    </div>
    )
}
export default Post