import {useState} from 'react'
import React from 'react';
/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIiO8lpJcBozNvY6ocapye6oly0SLGa80Bxw&usqp=CAU*/
let publicacao = {
    titulo:"Date of the final exams",
    img:"",
    user:{name:"Paulo Santo",
        foto:"https://w0.peakpx.com/wallpaper/367/169/HD-wallpaper-heart-aesthetic.jpg"       
        },
    time:"2 hrs ago",
    msg:"Dear Students\n I want to inform you that after 6 moths of our cooperation it is necessary to test you knowlege by th final exam, It means we need to find a date for our final exam, In this semester you were extremely under the stress due to",
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
        time:"12/1/4",
    },

            ]
}
function Post(props){
    const [open, setOpen] = useState(false);
    const [mo, setMo] = useState(false)
    return ( 
    <div className={`flex flex-initial flex-col gap-6  pt-6 bg-white mt-2 px-4  w-full h-auto rounded-md  sm:max-w-lg lg:max-w-2xl xl:max-w-4xl`}>
            {/*titulo*/}
            <div className='flex justify-between pr-1'>
                <h1 className='text-xl font-bold'>{publicacao.titulo}</h1>
                <div>
                    <div onClick={()=>{setMo(!mo)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div className='w-0 h-0 overflow-visible'>
                        <div className={`${mo==false && 'hidden'} relative top-0 p-2 w-20 h-14 bg-ipt justify-center items-start flex flex-col gap-1`}>
                            <button className='text-xs text-white rounded-sm '>publicacao</button>
                            <button className='text-xs text-white rounded-sm '>denunciar</button>
                        </div>
                    </div>
                </div>

            </div>
            {/*user profile pic, name and publication date*/}
            <div>
                <div className='flex gap-x-2 '>
                    <img className="w-8 h-8 cursor-pointer" src={`${publicacao.user.foto}`} />
                    <div >
                        <h2 className='text-xs font-thin text-opacity-10'>{publicacao.user.name}</h2>
                        <h2 className="text-xs font-thin text-opacity-40">{publicacao.time}</h2>
                    </div>
                </div>

            </div>
            {/*messagem e imagem da publicacao */}
            <div className='flex flex-col  gap-y-8 '>
                
                <div className={` ${ publicacao.img =="" && 'hidden'} flex w-full items-center  justify-center overflow-hidden`}>
                    <img  className="w-full" src={`${publicacao.img}`}/>
                </div>
                {/*text message da publicacao*/}
                <div className='flex items-center justify-center lg:justify-end max-h-24 w-full'>
                    <div className='flex flex-1 max-h-20 overflow-hidden'>
                        <p className='text-sm font-extralight text-justify overflow-ellipsis overflow-hidden '>{publicacao.msg}</p>
                    </div>
                </div>
                
            </div>
            {/* comment and save icons besides the number and opening of comments */}
            <div className='flex flex-row '>{/*flex-col sm:!flex-row gap-y-3*/}
                {/*comment and save icons*/}
                <div className='flex w-full gap-1'>
                        {/*save icon*/}
                        <div  className='flex p-1 justify-center items-center cursor-pointer rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#88b77b' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </div>
                        {/*comment icon*/}
                        <button className='flex py-1 px-2 justify-center items-center bg-ipt rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#FFFFFF' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                            <h3 className='text-white text-xs mr-1'>Comment</h3>
                        </button>
                    
                </div>
                {/*numbers of comments*/}
                <div className={`flex justify-end w-full `}> {/*justify-start sm:!justify-end  ${open && 'hidden'}*/}
                    <div className={`flex ${publicacao.coments.length==0 && 'hidden'} bg-ipt rounded p-2 h-8 items-center justify-center cursor-pointer`} onClick={()=>setOpen(!open)}>
                        <h3 className={`text-white text-xs `}>comments {publicacao.coments.length}</h3>{/* ${open && 'hidden'}*/}
                        {/*<h3 className={`text-ipt text-xs ${!open && 'hidden'} `}> show less</h3>*/}
                    </div>
                </div>
            </div>
            {/*
            {ivisible div that contains the comments is showed (it has to set comments to open}
            <div className={`flex`}>{${!open && 'hidden'}}
            {publicacao.coments.map( (comment) => (
                <>
                    <h3 className='text-xs'>{comment.commentMsg}</h3>
                    <div className='flex gap-4'>
                        <h3 className='text-xs font-light'>-{comment.user.name}</h3>
                        <h3 className='text-xs font-light'>{comment.time}</h3>
                    </div>
                </>     
            ))}
            </div> */}
    <div></div>
    </div>
    )
}
export default Post
/* */