import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/composants/card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <Link to={`/project/${props.id}`}>
                {" "}
                <img src={props.cover} alt="project" />
                <span>{props.title}</span>
            </Link>
        </div>
    )
}
