import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
import CircularProgress from '@mui/material/CircularProgress';
import { GetChannels } from '../services/channels.api'
import { GetUserPublications } from '../services/publication.api'




function HomePage() {
  var publicacao = [{
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
  const [homePageUser,setHomePageUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [publicationcount, setPublicationcount] = useState(5);
  const [publications, setPublications] = useState(null);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [filter, setFilter] = useState("")
  const [ascdes,setAscdes] = useState("DESC")
  useEffect(() => {
    getPublicacao(homePageUser.user_id,0,filter,ascdes)
    
  },[]);
  //5 primeiras publicações das 

 async function getPublicacao(user,page,filter,ascdes) {
    let p = await  GetUserPublications(user,0,filter,ascdes)
    //publications
    setPublications(p)
    console.log(p)
    
  }
  
  
  ///lista de publicações
  function handleOpenSideBar(){
    setOpenSideBar(!openSideBar);
  }
  return (
    <>
      <div className='h-full relative top-0'>
        <div className="flex  h-screen  ">

        <SideBar open={openSideBar} ></SideBar>
        <div className='bg-background-gray  sm:px-6  px-2 flex flex-1 h-full font-semibold w-full overflow-y-auto justify-center'>
          <div className='flex flex-col w-full '>
          <Header></Header>
          <div className='flex flex-col items-center '>
          <AddPost></AddPost>
          {publications === null?(<><div className='w-full h-48 '></div><CircularProgress color="success" /><div className='w-full h-96 flex'></div></>):
          (publications.length==0?<div className='flex w-96 h-96 py-48 justify-items-center ali'><h1 className='text-center'>Não esta escrito em nenhum canal<br/>se <strong onClick={handleOpenSideBar}>increva</strong> em uma canal</h1><button></button></div>:
            (publications.map((publication) => (
              <Post publicacao={publication}></Post>
            )) 
          ))}
         
         
          </div>
          <Footer></Footer>
          </div>
        </div>
      </div>
      </div>
      <div className=' sm:hidden absolute bottom-0  w-full bg-ipt'>
        <Bar></Bar>
      </div>
    
    </>
  )
}

export default HomePage