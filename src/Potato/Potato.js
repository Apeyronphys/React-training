import React from 'react';

export default (props) => (
    <div style = {{
        border: '2px solid #ccc',
        marginBottom: '10px',
        backgroundColor: 'lightblue',
        padding: '10px',
        boxShadow: '0 4px 5px 0px rgba(0, 0, 0, .14)',
        borderRadius: '5px'
    }}>
        <p style = {{color:'black'}}>This potato named: <strong>{props.name}</strong></p>
        <p>How many of {props.name} potatoes we have: <strong>{Math.round(Math.random() * 100)}</strong></p>
        <p>Year of creation: {props.year}</p>
        <input type = "text" onChange = {props.onChangeName} value = {props.name}/>
        {props.children}
    </div>
);