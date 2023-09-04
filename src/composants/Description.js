import React from 'react'
// import '../styles/composants/description.css'

export default function Description(props) {
    return (
        <div className={props.class}>
            <span>{props.description} </span>
        </div>
    )
}
