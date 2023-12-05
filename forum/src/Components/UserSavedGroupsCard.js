import React, { useState } from 'react'

const UserSavedGroupsCard = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className='flex w-40 h-40  border items-center justify-center cursor-pointer' onClick={()=>{setOpen(true)}}>
        {props.canal}
    </div>
    <div className={`absolute flex items-center justify-center self-center ${!open && 'hidden'} top-0 left-0 w-full h-full z-40 `}>
      <div className='flex   w-full h-full bg-white '>
          <div className='flex cursor-pointer w-full h-20 p-4 justify-end  ' onClick={()=>{setOpen(false)}}>x</div>
      </div>
    </div>
    </>
  )
}

export default UserSavedGroupsCard