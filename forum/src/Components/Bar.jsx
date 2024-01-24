import React, {useState} from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

function Bar(props){
    const [open, setOpen] = useState(false);
    return ( 
    <div className={`flex flex-initial b-0 sm:hidden gap-12 items-center  justify-center bg-ipt   w-full h-10 rounded `}>
                    
                    <div className={`flex  justify-center cursor-pointer `}>
                        <div className={` flex items-center justify-center bg-ipt w-6 h-6 `}>
                            <MenuOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                        </div>
                    </div> 

                    <div className={`flex  justify-center cursor-pointer `}>
                        <div className={` flex rounded items-center justify-center w-6 h-6 `}>
                            <HomeOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                        </div>
                    </div> 
                    {/*Home*/}
                    
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                        <div className=' flex rounded items-center justify-center w-6 h-6 '>
                            <BookmarkAddedOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                        </div>
                    </div>                     
                    {/*Your treads*/}
                    <div className='flex gap-x-2 items-center cursor-pointer '>
                        <div className=' flex rounded items-center justify-center w-6 h-6'>
                            <MessageOutlinedIcon sx={{ color: 'white', fontSize: 30}}/>  
                        </div>
                    </div> 
    </div>
    )
}
export default Bar