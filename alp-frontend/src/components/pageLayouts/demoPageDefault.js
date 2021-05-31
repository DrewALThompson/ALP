import React, {useState} from 'react';

const DemoPageDefault = (props) => {


    return (
        // might need to consider making each component of the demoPage something different
        <div>
            <h1>{props.demoTitle}</h1>
            <p>{props.demoDescription}</p>
            <button onClick={props.onClick}>Demo</button>
        </div>
    )
}

export default DemoPageDefault