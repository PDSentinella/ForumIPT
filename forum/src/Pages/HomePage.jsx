import React, { useEffect, useState } from 'react'
import Header from '../Components/HomePage/Header'
import Footer from '../Components/HomePage/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import CircularProgress from '@mui/material/CircularProgress';
import { GetChannels } from '../services/channels.api'
import { GetUserPublications } from '../services/publication.api'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { ArrowBackIosSharp } from '@mui/icons-material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';



function HomePage() {
  
  const [homePageUser,setHomePageUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [publicationcount, setPublicationcount] = useState(0);
  const [publications, setPublications] = useState(null);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [filter, setFilter] = useState("")
  const [ascdes,setAscdes] = useState("DESC")
  const [search,setSearch] = useState(0)
  useEffect(() => {
    getPublicacao(homePageUser.user_id,publicationcount,filter,ascdes)
    
  },[filter,ascdes,search,publicationcount]);
  //5 primeiras publicações das 

 async function getPublicacao(user,page,f,ascdes) {
    let p = await  GetUserPublications(user,page,f,"DESC")
    //publications
    setPublications(p)
    console.log(p)
    
  }

  const handleProximaPagina = ()=>{
    setPublicationcount(publicationcount+1)
    console.log(publicationcount)
  }
  const handleSearch = ()=>{
    console.log(search)
    let s = search +1
    setSearch(s)
    
  }
  const handlePaginaAnterior = ()=>{

    let pagina = publicationcount-1
    if(pagina<0){
      pagina = 0
    }
    setPublicationcount(pagina)
    console.log(pagina)
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
          {<div className=' flex justify-center w-full px-5 py-2 rounded-lg bg-ipt items-center gap-x-4 sm:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
            <input className=' w-full h-7 rounded-2xl p-2 border-0	' onChange={(event)=>{setFilter(event.target.value)}}></input>
            <div className='flex justify-center items-center h-7 px-2 gap-x-1 rounded-2xl bg-white' onClick={()=>{handleSearch()}}>
              <SearchSharpIcon sx={{ fontSize: 18 }}></SearchSharpIcon>
            </div>
            <div className='flex justify-center items-center h-7 px-2 gap-x-1 rounded-2xl bg-white'>
              <div className='flex h-full'>
                <div variant="contained" onClick={()=>{handlePaginaAnterior()}} ><ArrowBackIosSharp sx={{ fontSize: 10 }} /></div>
                <div variant="contained"onClick={()=>{handleProximaPagina()}} ><ArrowForwardIosSharpIcon sx={{ fontSize: 10 }} /></div>
              </div>
            </div>
            <div className='flex justify-center items-center h-7  rounded-2xl bg-ipt' onClick={()=>{handleSearch()}}>
              <h1 className='text-white text-sm  '>{publicationcount}</h1>
            </div>
          </div>}
          
          <AddPost></AddPost>
          {publications === null?(<><div className='w-full h-48 '></div><CircularProgress color="success" /><div className='w-full h-96 flex'></div></>):
          (publications.length===0?<div className='flex w-full h-96 justify-center items-center'><h1 className='text-center'>Não esta escrito em nenhum canal<br/>se <strong onClick={handleOpenSideBar}>increva</strong> em uma canal</h1><button></button></div>:
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
    
    </>
  )
}

export default HomePage