import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer id="contact" style={{ backgroundColor: "#f8f9fa", padding: "40px 20px", marginTop: "50px" }}>
            <div className="container" style={{ textAlign: "center" }}>
                <h4>Contact Us</h4>
                <p>Email: <a href="mailto:contact@sousucloset.com">sousucloset@gmail.com</a></p>
                <p>Phone: +216 75 291 711</p>
                <p style={{ marginTop: '20px', color: '#888' }}>
                    © {new Date().getFullYear()} SouSou Closet. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer