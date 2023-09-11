import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Logo from '../images/LogoWhite.svg'
import '../styles/composants/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="contact">
                <div className="contact-link">
                    <FontAwesomeIcon icon={faPhone} className='svg' />
                    <a href="tel:+33627812760">Appeler le numéro</a>
                </div>
                <div className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} className='svg' />
                    <a href="mailto:contact@dylanvivant.com">Envoyer un e-mail</a>
                </div>
            </div>
        </div>
    )
}
