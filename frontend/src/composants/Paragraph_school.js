import React from 'react'
import '../styles/composants/paragraph_school.css'
import { NavLink } from 'react-router-dom'

export default function Paragraph_school(props) {



    return (
        <div className='paragraphe-comp'>
            <div className="text">
                <p id='paragraphe'>
                    {props.Paragraph}
                </p>
            </div>

            <NavLink to={props.link} id='button'>
                <div href={props.link} className='button_paragraphe'>
                    {props.button}
                </div>
            </NavLink>

        </div>
    )
}
