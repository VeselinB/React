import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <p>CopyRight 2019. All Rights Reserved.</p>
            <ul>
                <li><a rel="noopener noreferrer" href="https://facebook.com" target="_blank"><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                <li><a rel="noopener noreferrer" href="https://twitter.com/?lang=bg" target="_blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                <li><a rel="noopener noreferrer" href="https://www.instagram.com/?hl=bg" target="_blank"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer;