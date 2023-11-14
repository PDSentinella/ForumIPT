import {useState} from 'react'
import React from 'react';

function Icon(props){
    return <div className="flex">
        <div><img /*src={props.img} *//></div>
        <div><h1>props.name</h1></div>
        <div className={`${props.notification==0 && 'hidden'}`}><h1>{props.notifications}</h1></div>
    </div>
}
export default Icon