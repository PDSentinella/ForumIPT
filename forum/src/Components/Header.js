import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between mx-4 py-4 items-center'>
        <a href="#" className="flex items-center cursor-pointer">
          <img className='h-12 md:h-24' src='/icons/ipt.png'></img>
        </a>
        <img className="h-8 md:h-14 rounded-full cursor-pointer" src="https://dsz7vodgjx60a.cloudfront.net/wp-content/uploads/2020/03/26150830/Anfernee-Simons.jpg" alt="Rounded avatar"></img>
    </div>
  )
}

export default Header