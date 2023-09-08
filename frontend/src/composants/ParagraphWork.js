import React from 'react'
import '../styles/composants/paragraph_work.css'
import { NavLink } from 'react-router-dom'

export default function ParagraphWork(props) {



    return (
        <div className='paragraphe-comp'>
            <div className="text">
                <p className='paragraphe'>
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
