import React, { useState , useEffect} from 'react';
import { GetChannels } from '../services/channels.api'
import { Link } from "react-router-dom";
import { Avatar, Box } from '@mui/material';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';

function Drawerl(props){
  //hooks
  const [open, setOpen] = useState(true);//hook para o status (open/close) a lista de disciplinas que o user esta inscrito
  const [channels, setchannels] = useState([]); //hook para guardar os canais o qual o user esta inscrito (recebido por fetch)

  useEffect(() => {
    //função que por meio de uma funcção de serviço faz o fetch dos canais que o user logado está inscrito
    async function fetchChannels() {
      //os dados do user logado estão guardados no local storage
      let user = JSON.parse(localStorage.getItem('user'));
      const canais = await GetChannels(user.user_id);
      //teste
      //console.log(canais)
      setchannels(canais);
    }
  
    fetchChannels();
  }, []);

    return (
      <div className='flex flex-col  items-center pt-2 overflow-y-auto h-full '>
        <div className='flex cursor-pointer pb-2 '>
          {/*botao da lista dos canais (pode mostrar ou esconder a lista)*/}
          <h1 className={`text-white ${!props.open ?'hidden':'pr-4'} cursor-pointer`}>Canais ({channels.length})</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  PencilIcon color='#ffffff' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 self-center ${!props.open && 'hidden'} ${open&&'rotate-180'} `} onClick={()=>setOpen(!open)}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className={`${!open ? 'hidden':''} flex `}>
          {/*lista dos canis*/}
            <ul className=''>
              {/*faz o map dos canais*/}
            {channels.map( (channel) => (
              /* faz um intem para cada um dos canais*/
              <li key={channel.canal_id} className='flex pb-2 gap-2'>
                  {/*MUI inco */}
                  <SchoolSharpIcon sx={{ color: 'white', fontSize: 28}}></SchoolSharpIcon>

                  <Box 
                  sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        overflowY: 'auto'
                      }}
                  >
                    <h1 className={`text-white truncate ${!props.open && 'hidden'} cursor-pointer`}>
                      {/*Link que faz o redirecionamento para a página (component do canal)*/}
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