import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/composants/carrousel.css'

export default function Carrousel(props) {
    return (
        <div className="carrousel">
            <Link to={`/project/${props.id}`}>
                <img src={props.cover} alt={props.title} />
            </Link>
        </div>
    )
}
