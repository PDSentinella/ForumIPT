import {useState} from 'react'
import React from 'react';

function SubForum(props){
    return ( 
    <div className={`flex flex-initial  gap-4 m-2   items-center p-1 rounded  ${!props.open && 'justify-center '}  `}>
            <div className=' flex  bg-space_cadet w-8 h-8 rounded  items-center justify-center'></div>
            <div className={` ${!props.open && 'hidden'} w-3/4  text-center `}>{props.name}</div>
            <div className={` ${(props.notification===0 || !props.open ) && 'hidden'}  flex  bg-space_cadet w-4 h-4 rounded gap-2  justify-center`}><h3 className=' text-alice-blue text-xs'>{props.notification}</h3></div>
    </div>
    )
}
export default SubForum
//
//<div className='bg-phlox w-2 h-2 rounded-full absolute '></div>