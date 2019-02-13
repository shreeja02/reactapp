import React from 'react';

const person = (props)=>{
    return  (
        <div>
        <h1>Hi, this is {props.name} and age={props.age}</h1>
        <h1>{props.children}</h1>
        </div>
    );
}
export default person;