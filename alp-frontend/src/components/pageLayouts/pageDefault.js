import React, {useState} from 'react';

const PageDefault = (props) => {

    let imgurl = `${props.url}.jpg`
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.main}</p>
            <h2>{props.titleTwo}</h2>
            <p>{props.secondary}</p>
            <img src={imgurl} alt={props.imgTitle} />
        </div>
    )
}

export default PageDefault