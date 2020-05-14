import React from 'react';
import './Potato.css';

export default (props) => {
    const inputClasses = ['input'];

    if (props.name != ''){
        inputClasses.push('green');
    }else{
        inputClasses.push('red');
    };

    return(
        <div className = 'Potato' >
            <p style = {{color:'black'}}>This potato named: <strong>{props.name}</strong></p>
            <p>How many of {props.name} potatoes we have: <strong>{Math.round(Math.random() * 100)}</strong></p>
            <p>Year of creation: {props.year}</p>
            <input 
                type = "text" 
                onChange = {props.onChangeName} 
                value = {props.name}
                className = {inputClasses.join(' ')}
            />
            {props.children}
        </div>
)}; 