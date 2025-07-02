import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer">
        <div className="footer-container">
            <div className="footer-section">
            <h4>SouSou Closet</h4>
            <p>Your go-to store for chic, trendy and affordable fashion.</p>
            </div>
            <div className="footer-section">
            <h4>Contact</h4>
            <p><a href="mailto:sousucloset@gmail.com">sousucloset@gmail.com</a></p>
            <p> +216 75 291 711</p>
            </div>
        </div>
        <div className="footer-bottom">
            © {new Date().getFullYear()} SouSou Closet. All rights reserved.
        </div>
        </footer>
    );
}

export default Footer;
