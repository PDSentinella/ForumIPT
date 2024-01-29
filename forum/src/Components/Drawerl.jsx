import React, { useState , useEffect} from 'react';
import { GetChannels } from '../services/channels.api'
import { Link } from "react-router-dom";
import { Box } from '@mui/material';


function Drawerl(props){
  const [open, setOpen] = useState(true);
  const [channels, setchannels] = useState([]);

  useEffect(() => {
    async function fetchChannels() {
      let user = JSON.parse(localStorage.getItem('user'));
      const canais = await GetChannels(user.user_id);
      setchannels(canais);
    }
  
    fetchChannels();
  }, []);

    return (
      <div className='flex flex-col  items-center pt-2 overflow-y-auto h-full '>
        <div className='flex cursor-pointer pb-2 '>
          <h1 className={`text-white ${!props.open ?'hidden':'pr-4'} cursor-pointer`}>Canais ({channels.length})</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  PencilIcon color='#ffffff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 self-center ${!props.open && 'hidden'} ${open&&'rotate-180'} `} onClick={()=>setOpen(!open)}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className={`${!open ? 'hidden':''} flex `}>
            <ul className=''>
            {channels.map( (channel) => (
              <li key={channel.canal_id} className='flex pb-2 gap-2'>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" PencilIcon color='#ffffff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  <Box 
                  sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        overflowY: 'auto'
                      }}
                  >
                    <h1 className={`text-white truncate ${!props.open && 'hidden'} cursor-pointer`}>
                      <Link  reloadDocument to={`/canal/${channel.canal_id}`}>{channel.nome}</Link>
                    </h1>
                  </Box>

              </li>     
            ))}
               
            </ul>
        </div>


        
      </div>
    )
  }

export default Drawerl