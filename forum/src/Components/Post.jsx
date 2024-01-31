import {useState} from 'react'
import React from 'react';
import AddComment from './AddComment';
import { setSavePublicationStatus } from '../services/publication.api';
import { DeletePubById } from '../services/DashBoard.api';

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
    const [publication, setPublication] = useState(props.publicacao);
    const [open, setOpen] = useState(false);
    const [mo, setMo] = useState(false)
    const [saved,setSaved] = useState(props.publicacao.saved?true:false)

    async function deletePublication(){
        const response = await DeletePubById({"publication_id":publication.publication_id})
        console.log(response)
        window.location.reload();
    }

    async function savedhandle(){
        let savedUserPublicatoinData = {"user_id":JSON.parse(localStorage.getItem("user")).user_id,"publication_id":publication.publication_id,"saved":!saved}
        console.log(savedUserPublicatoinData);
        let response = await setSavePublicationStatus(savedUserPublicatoinData);
        setSaved(!saved);
    }
    return ( 

    <div className={`flex flex-initial flex-col gap-6  pt-6 bg-white mt-2 px-4  w-full h-auto rounded-md  sm:max-w-lg lg:max-w-2xl xl:max-w-4xl`}>
            {/*titulo*/}
            <div className='flex justify-between pr-1'>
                <h1 className='text-xl font-bold'>{publication.titulo}</h1>
                <div>
                    <div onClick={()=>{setMo(!mo)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div className='w-0 h-0 overflow-visible'>
                        <div className={`${mo==false && 'hidden'} rounded-lg right-10 relative top-0 p-2 w-20 h-14 bg-ipt justify-center items-start flex flex-col gap-1`}>
                            {/*<button className='text-xs text-white rounded-sm '>publicacao</button>/*/}
                            {<button className='text-xs text-white rounded-sm '>denunciar</button>}
                            <button className={` ${JSON.parse(localStorage.getItem("user")).nome!=publication.nome && 'hidden'} text-xs text-white rounded-sm `} onClick={()=>{deletePublication()}}>delete</button>
                        </div>
                    </div>
                </div>

            </div>
            {/*user profile pic, name and publication date*/}
            <div>
                <div className='flex gap-x-2 '>
                    <img className="w-8 h-8 cursor-pointer" src={`${publication.profile_image}`} />
                    <div >
                        <h2 className='text-xs font-thin text-opacity-10'>{publication.nome}</h2>
                        <h2 className="text-xs font-thin text-opacity-40">{publication.time}</h2>
                    </div>
                </div>

            </div>
            {/*messagem e imagem da publicacao */}
            <div className='flex flex-col  gap-y-8 '>
                {/*
                <div className={` ${ publication.img =="" && 'hidden'} flex w-full items-center  justify-center overflow-hidden`}>
                    <img  className="w-full" src={`${publication.img}`}/>
                </div>*/}
                {/*text message da publicacao*/}
                <div className='flex items-center justify-center lg:justify-end max-h-24 w-full'>
                    <div className='flex flex-1 max-h-20 overflow-hidden'>
                        <p className='text-sm font-extralight text-justify overflow-ellipsis overflow-hidden '>{props.publicacao.msg}</p>
                    </div>
                </div>
                
            </div>
            {/* comment and save icons besides the number and opening of comments */}
            <div className='flex flex-row '>{/*flex-col sm:!flex-row gap-y-3*/}
                {/*comment and save icons*/}
                <div className='flex w-full gap-1'>
                        {/*save icon*/}
                        {/*PencilIcon color={`${saved?"#ffffff":"#88b77b"}`}*/}
                        <div  className='flex p-1 justify-center items-center cursor-pointer rounded-xl'onClick={()=>{savedhandle()}} >
                            <svg  xmlns="http://www.w3.org/2000/svg" fill={`${saved?"#88b77b":"none"}`} PencilIcon color="#88b77b" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </div>
                        {/*comment icon*/}
                        <div className='flex p-1 justify-center items-center cursor-pointer rounded-xl'>
                            <AddComment publication_id={publication.publication_id}></AddComment>
                        </div>
                        {/*<button  className='flex  w-10 h-10 bg-space_cadet justify-center items-center cursor-pointer rounded-xl' onClick={getCanalUser("")}>
                        </button>*/}
                        
                    
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