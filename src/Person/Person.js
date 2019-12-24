import React from 'react';

const person = (props)=>{
    return((
        <div>
            <p>i am {props.name} and i am {props.age} {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
        </div>
    ))
}
export default person;
