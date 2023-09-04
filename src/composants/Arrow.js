import React from 'react'
import '../styles/composants/arrow.css'

export default function Arrow(props) {
    return (
        <i onClick={props.onClick} className={props.className}></i>
    )
}
