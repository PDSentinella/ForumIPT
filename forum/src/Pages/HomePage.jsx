import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
import CircularProgress from '@mui/material/CircularProgress';

//import getPublicacao from '../utils/getPublicacao'




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
  const [homePageUser,setHomePageUser] = useState(localStorage.getItem("user"))
  const [publicationcount, setPublicationcount] = useState(5);
  const [publications, setPublications] = useState();

  useEffect(() => {
    setPublications(getPublicacao(publicationcount))
    
  },[]);
  //5 primeiras publicações das 

  function getPublicacao() {
  return publicacao
  }
  

  ///lista de publicações
  
  return (
    <>
      <div className='h-full relative top-0'>
        <div className="flex  h-screen  ">

        <SideBar></SideBar>
        <div className='bg-background-gray  sm:px-6  px-2 flex flex-1 h-full font-semibold w-full overflow-y-auto justify-center'>
          <div className='flex flex-col w-full '>
          <Header></Header>
          <div className='flex flex-col items-center '>
          <AddPost></AddPost>
          {publications==null?<><div className='w-full h-48 '></div><CircularProgress color="success" /><div className='w-full h-96 flex'></div></>:
            publications.map((publication) => (
              <Post publicacao={publication}></Post>
            )) 
          }
         
         
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