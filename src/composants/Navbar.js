import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/composants/navbar.css';

export default function Navbar() {

    const location = useLocation();

    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink to={'/'}>
                        <img src={Logo} alt="Dylan Vivant logo" />
                    </NavLink>
                </div>
                <ul>
                    <li className={location.pathname === '/' ? "li-active" : ""}>
                        <NavLink
                            to={'/'}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            _aboutme
                        </NavLink>
                    </li>
                    <li className={location.pathname.substring(0, 8) === '/project' ? "li-active" : ""}>
                        <NavLink
                            to={'/project'}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            _project
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/school' ? "li-active" : ""}>
                        <NavLink
                            to={'/school'}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            _school
                        </NavLink>
                    </li>
                    <li className={location.pathname.substring(0, 5) === '/work' ? "li-active" : ""}>
                        <NavLink
                            to={'/work'}
                            className={(nav) => (nav.isActive ? "nav-active" : "")}
                        >
                            _work
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
