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
    return ( 
    <div className={`flex flex-initial flex-col gap-4 bg-white mt-2 p-2  w-full h-auto rounded-md `}>
            <h1 className='text-xl font-bold'>{publicacao.titulo}</h1>
            <div>
                <div className='flex gap-x-2 '>
                    <img className="w-8 h-8" src="https://w0.peakpx.com/wallpaper/367/169/HD-wallpaper-heart-aesthetic.jpg" />
                    <div >
                        <h2 className='text-xs font-thin text-opacity-10'>{publicacao.user.name}</h2>
                        <h2 className="text-xs font-thin text-opacity-40">{publicacao.time}</h2>
                    </div>
                </div>

            </div>
            <div>
                <p className='text-sm  font-extralight'>{publicacao.msg}</p>
            </div>
    </div>
    )
}
export default Post