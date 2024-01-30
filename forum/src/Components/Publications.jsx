import React, {useState, useEffect, useCallback} from 'react'
import Post from './Post';
import getUsers from '../utils/getsUser';
import getPublicacao from '../utils/getPublicacao';



function Publications(props){
    const [publications,setPublications] = useState([]);
  useEffect(() => {
    getSavedPublications("?filter[user]="+props.user.id)
    
  },[]);

  
  function getPublicacao(filter="") {
    fetch('https://api.sheety.co/96746cd1ec0da26ab33a53d1667461a4/ipt/publicacao/'+filter)
    .then((response) => response.json())
    .then(json => {
      
    return json.publicacao;
    });
  }
    
    return ( 
    <>  {typeof publications == "object"?
    publications.map((publication) => (
        <Post publicacao={publication}></Post>
   )):
        <div></div>
    }
    </>
    )
}
export default Publications