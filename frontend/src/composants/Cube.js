import React from 'react'
import '../styles/composants/cube.css'

export default function Cube(props) {
    return (
        <i onClick={props.onClick} className={props.className}></i>
    )
}
