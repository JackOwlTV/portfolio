import React from 'react'
import '../styles/composants/paragraph_work.css'
import { NavLink } from 'react-router-dom'

export default function Paragraph_work(props) {



    return (
        <div className='paragraphe-comp'>
            <div className="text">
                <p id='paragraphes'>
                    {props.Paragraph}
                </p>
            </div>

            <NavLink to={props.link} id='boutton'>
                <div href={props.link} className='buttonparagraphe'>
                    {props.button}
                </div>
            </NavLink>

        </div>
    )
}
