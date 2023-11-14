import {useState} from 'react'
import React from 'react';

function SubForum({name, notification }){
    return ( <div className="flex flex-no overflow-hidden flex-nowrap">
        <img scr=""/>
        <div className="flex">{name}</div>
        <div className={`${notification==0 && 'hidden'} flex`}><h1>{notification}</h1></div>
    </div> )
}
export default SubForum