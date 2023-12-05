import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='flex justify-between mx-4 py-4 items-center'>
        <div className='flex items-center'>
          <a href="/" className="flex items-center cursor-pointer">
            <img alt="profile_image" className='h-12 md:h-24' src='/icons/ipt.png'></img>
          </a>
        </div>
        <Link to="/profile"><img className="h-8 md:h-14 rounded-full cursor-pointer" src="https://dsz7vodgjx60a.cloudfront.net/wp-content/uploads/2020/03/26150830/Anfernee-Simons.jpg" alt="Rounded avatar"></img></Link> 
    </div>
  )
}

export default Header