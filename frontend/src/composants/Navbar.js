import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../logo.webp'
import '../styles/composants/navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink to={'/'}>
                        <img src={Logo} alt="Dylan Vivant logo" />
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={'/aboutme'}>
                            _aboutme
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/project'}>
                            _project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/school'}>
                            _school
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/work'}>
                            _work
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
