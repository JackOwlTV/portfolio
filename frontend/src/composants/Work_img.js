import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/composants/work_img.css'

export default function Work_img(props) {
  return (
    <section>
        <img src={props.img} alt="HTTP Entreprise" className='Image' />
        <NavLink to={props.link}>

        </NavLink>
    </section>
    )
}
