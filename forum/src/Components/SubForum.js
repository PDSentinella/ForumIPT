
import React from 'react';
const props = {
    notification:2,
    name:Redes
}
function Icon(){
    return <div className="flex">
        <div><img /*src={props.img} *//></div>
        <div><h1>props.name</h1></div>
        <div className={'${props.notifications==0 && hidden}'}><h1>/*{props.notifications}</h1></div>
    </div>
}
export default Icon