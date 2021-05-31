import React from 'react';


const InfoPage = (props) => {
    return (
        <div className={props.infoBoxCss}>
            <h1 className={props.titleCss}>{props.title}</h1>
            <p className={props.infoCss}>{props.info}</p>
            <h1 className={props.titleCss2}>{props.title2}</h1>
            <p className={props.infoCss2}>{props.info2}</p>
        </div>
    )
}

export default InfoPage