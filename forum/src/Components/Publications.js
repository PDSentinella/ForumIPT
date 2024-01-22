import React, {useState, useEffect, useCallback} from 'react'
import Post from './Post';
import getUsers from '../utils/getsUser';
import getPublicacao from '../utils/getPublicacao';



function Publications(props){
    const [publications, setPublications] = useState("");
    function getPublication(publicationcount){
        let publicacaofetch = getPublicacao();
        /*for(var i= 0;i<publicacaofetch.lenght;i++){
            publicacaofetch[i]["user"] = getUsers(publicacaofetch[i]["user"]);
        }*/
        let publicacao = [{
          titulo:"Date of the final exams",
          img:"",
          user:{name:"Paulo Santo",
              foto:"https://w0.peakpx.com/wallpaper/367/169/HD-wallpaper-heart-aesthetic.jpg"       
              },
          msg:"Dear Students\n I want to inform you that after 6 moths of our cooperation it is necessary to test you knowlege by th final exam, It means we need to find a date for our final exam, In this semester you were extremely under the stress due to",
          
      },]
      console.log("123"+publicacaofetch)
      setPublications(publicacaofetch);
        return publicacao
      }
    useEffect(() => {
        // declare the data fetching function
        const fetchdata = async () => {
          let data = await getPublication();
          
          console.log(publications)
        }
      
        // call the function
        fetchdata()
          // make sure to catch any error
          .catch(console.error);
      }, [])
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