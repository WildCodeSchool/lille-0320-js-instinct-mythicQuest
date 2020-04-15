import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <p>© All rights reserved - <span>Instinct Agency</span></p>
            <div className="social-network">
                <a href="www.twitter.com"><img src="images/twitter.png" alt="logo twitter"></img></a>
                <a href="www.facebook.com"><img src="images/facebook.png" alt="logo facebook"></img></a>
                <a href="www.youtube.com"><img src="images/youtube.png" alt="logo youtube"></img></a>
            </div>
        </footer>
    )
}

export default Footer;