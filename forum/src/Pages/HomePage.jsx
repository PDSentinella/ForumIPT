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
  const [homePageUser,setHomePageUser] = useState(localStorage.getItem("user"))
  const [publicationcount, setPublicationcount] = useState(5);
  const [publications, setPublications] = useState(null);

  useEffect(() => {
    getPublicacao()
    
  },[]);

  function getPublicacao(filter="") {
    fetch('https://api.sheety.co/96746cd1ec0da26ab33a53d1667461a4/ipt/publicacao/'+filter)
    .then((response) => response.json())
    .then(json => {
      
      
    setPublications(json.publicacao);
    });
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
             {/*<Publications></Publications>*/}
         
         
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