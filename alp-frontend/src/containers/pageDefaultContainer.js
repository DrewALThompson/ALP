import React from 'react';

const PageDefaultContainer = (props) => {

    let layout = props.page
    
    return (
        <div>
            <h1>{layout.title}</h1>
            <p>{layout.main}</p>
            {layout.image !== null ? image : null}
            <h2>{layout.titleTwo}</h2>
            <p>{layout.secondary}</p>
            {urlOne !== null ? urlOne : null}
            {urlTwo !== null ? urlTwo : null}
            {urlThree !== null ? urlThree : null}
        </div>
    )
}

export default PageDefaultContainer