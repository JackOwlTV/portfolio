import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/composants/work_img.css'

export default function Work_img(props) {
    return (
        <section id='work'>
            <a href="https://httproject.fr/">
                <img src={props.img} alt="HTTP Entreprise" className='Image' />
            </a>
            <NavLink to={props.link}>
                <i className="fa-solid fa-plus Icon_more"></i>
            </NavLink>
        </section>
    )
}