import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row d-flex align-items-center">
                <div className="col-5 text-white">
                    <span className="p-5">© 2020 Tous les droits sont réservés.</span>
                </div>
                <div className="col-3">
                    <span className="spanNave">S.K.Y</span>
                </div>
                <div className="col-4">
                    <a href="https://www.linkedin.com/in/salih-kadir-yavas/"><i class="fab fa-linkedin-in fa-1x p-5"></i></a>
                    <a href="https://www.instagram.com/yavas.03/"><i class="fab fa-instagram fa-1x p-5"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;