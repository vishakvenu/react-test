import React from 'react';

const todo = ({data}) => {
    return (
        <React.Fragment>
            {data.map(item=>{
                return <li key={item}>{item}</li>
            })}

        </React.Fragment>
    );
};


export default todo;