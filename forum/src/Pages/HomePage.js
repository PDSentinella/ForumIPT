import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
//import getPublicacao from '../utils/getPublicacao'
import getUsers from '../utils/getsUser'
import Publications from '../Components/Publications'

async function getPublicacao(filter="") {
  let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/publicacao'+"/"+filter;
  let value;
  await fetch(url)
  .then((response) => response.json())
  .then(json => {
  // Do something with the data
   value = json.publicacao
  //console.log(value)
  
  });
  
  return value;
  
  
}

function getPublication(publicationcount){
  let publicacao = {
    titulo:"Date of the final exams",
    img:"",
    user:{name:"Paulo Santo",
        foto:"https://w0.peakpx.com/wallpaper/367/169/HD-wallpaper-heart-aesthetic.jpg"       
        },
    msg:"Dear Students\n I want to inform you that after 6 moths of our cooperation it is necessary to test you knowlege by th final exam, It means we need to find a date for our final exam, In this semester you were extremely under the stress due to",
    
} 
console.log(publicacao)
  return publicacao
}
function HomePage() {
  const [publicationcount, setPublicationcount] = useState(5);
  const [publications, setPublications] = useState(getPublication(publicationcount));

  useEffect(() => {
  });
 
  ///lista de publicações
  function getPublications(){

  }
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
          
             <Publications></Publications>
         
         
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