import React from 'react'
import '../styles/composants/paragraph.css'
import { NavLink } from 'react-router-dom'

export default function Paragraph(props) {

    

    return (
        <div className='paragraphe-comp'>
            <div className="text">
                    <p id='paragraphe'>
                    {props.Paragraph}
                </p>
            </div>

            <NavLink to={props.link} id='button'>
                <a className='button-paragraphe'>
                    {props.button}
                </a>
            </NavLink>

        </div>
    )
}
