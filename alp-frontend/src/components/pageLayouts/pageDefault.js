import React, {useState} from 'react';

const PageDefault = (props) => {

    let image = null;
    let urlOne = null;
    let urlTwo = null;
    let urlThree = null;
    if(props.image !== null){
        image = <img src={props.image + '.jpg'} alt={props.imageTitle} />
    }
    if(urlOne !== null){
        urlOne = <a href={props.urlOne}>{props.urlOneTitle}</a>
    }
    if(urlTwo !== null){
        urlTwo = <a href={props.urlTwo}>{props.urlTwoTitle}</a>
    }
    if(urlThree !== null){
        urlThree = <a href={props.urlThree}>{props.urlThreeTitle}</a>
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.main}</p>
            {image !== null ? image : null}
            <h2>{props.titleTwo}</h2>
            <p>{props.secondary}</p>
            {urlOne !== null ? urlOne : null}
            {urlTwo !== null ? urlTwo : null}
            {urlThree !== null ? urlThree : null}
        </div>
    )
}

export default PageDefault