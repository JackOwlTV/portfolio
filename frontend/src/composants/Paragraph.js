import React from 'react'
import '../styles/composants/paragraph.css'
import { NavLink } from 'react-router-dom'

export default function Paragraph(props) {



    return (
        <div>
            <div className="text">
                <p className='paragraphe'>
                    {props.Paragraph}
                </p>
            </div>

            <NavLink to={props.link} id='button'>
                <div className='button-paragraphe'>
                    {props.button}
                </div>
            </NavLink>

        </div>
    )
}
