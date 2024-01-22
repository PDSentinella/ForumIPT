import React, { useState } from 'react'
import Post from '../Components/Post'

function getPublicatoin(publicationcount){
  let publicacao = [{
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
}]
  return publicacao
}
//array com dados das publicações salvas
const UserSavedGroupsCard = (props) => {
  const [publicationcount, setPublicationcount] = useState(5);
  const [publicatoins, setPublications] = useState(getPublicatoin(publicationcount));
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className='flex w-40 h-40  border items-center justify-center cursor-pointer' onClick={()=>{setOpen(true)}}>
        {props.canal}
    </div>
    <div className={`absolute flex items-center justify-center self-center ${!open && 'hidden'} top-0 left-0 w-full h-full z-40 `}>
      <div className='flex   w-full h-full bg-white  flex-col overflow-y-auto'>
          <div className='flex cursor-pointer w-full h-20 p-4 justify-end  ' onClick={()=>{setOpen(false)}}>x</div>
          <div className='flex flex-col items-center '>
          {publicatoins.map((publication) => (
             <Post publicacao={publication}></Post>
        ))}
          </div>
      </div>
    </div>
    </>
  )
}

export default UserSavedGroupsCard