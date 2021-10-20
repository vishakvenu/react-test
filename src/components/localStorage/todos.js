import React from 'react';
import Todo from './todo';
const todos = ({Data}) => {
    return (
        <div>
        <ul>
        <Todo data={Data}/> 

        </ul>
            
        </div>
    );
};


export default todos;