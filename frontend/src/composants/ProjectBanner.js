import React from 'react'
import '../styles/composants/projectbanner.css'
export default function ProjectBanner(props) {
    return (
        <img className={props.className} src={props.imgSrc} alt={props.title} />
    )
}
