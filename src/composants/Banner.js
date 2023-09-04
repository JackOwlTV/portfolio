import React from 'react'
import '../styles/composants/banner.css'

export default function Banner(props) {
    return (
        <img className={props.className} src={props.imgSrc} alt={props.title} />
    )
}

