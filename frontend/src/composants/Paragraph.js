import React from 'react'
import '../styles/composants/paragraph.css'
import { NavLink } from 'react-router-dom'

export default function Paragraph(props) {

    

    return (
        <div className='paragraphe-comp'>
            <p className='paragraphe'>
                {props.Paragraph}
            </p>
            <NavLink to={props.link}>
                <button className='button-paragraphe'>
                    {props.button}
                </button>
            </NavLink>

        </div>
    )
}
