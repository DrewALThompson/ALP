import React from 'react';

const PageDefault = (props) => {

    let layout = props.page
    let image = null;
    let urlOne = null;
    let urlTwo = null;
    let urlThree = null;
    if(layout.image !== null){
        image = <img src={layout.image + '.jpg'} alt={layout.imageTitle} />
    }
    if(urlOne !== null){
        urlOne = <a href={layout.urlOne}>{layout.urlOneTitle}</a>
    }
    if(urlTwo !== null){
        urlTwo = <a href={layout.urlTwo}>{layout.urlTwoTitle}</a>
    }
    if(urlThree !== null){
        urlThree = <a href={layout.urlThree}>{layout.urlThreeTitle}</a>
    }
    return (
        <div>
            <h1>{layout.title}</h1>
            <p>{layout.main}</p>
            {image !== null ? image : null}
            <h2>{layout.titleTwo}</h2>
            <p>{layout.secondary}</p>
            {urlOne !== null ? urlOne : null}
            {urlTwo !== null ? urlTwo : null}
            {urlThree !== null ? urlThree : null}
        </div>
    )
}

export default PageDefault