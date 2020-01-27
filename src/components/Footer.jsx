import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="row d-flex align-items-center">
                <div className="col-5 text-white">
                    <span className="p-5"><i class="far fa-copyright fa-1x"></i> 2020 Tous les droits sont réservés.</span>
                </div>
                <div className="col-3">
                    <span className="spanNave p-5">S.K.Y</span>
                    <i class="fas fa-at fa-1x text-danger">   yavas00@hotmail.com</i>
                    <i class="fas fa-phone-volume fa-1x text-danger">   (+32) 486 90 50 69</i>
                </div>
                <div className="col-4">
                    <a href="https://www.linkedin.com/in/salih-kadir-yavas/"><i class="fab fa-linkedin-in fa-1x p-5"></i></a>
                    <a href="https://www.instagram.com/yavas.03/"><i class="fab fa-instagram fa-1x p-5"></i></a>
                    <a href="https://github.com/KadirYavas"><i class="fab fa-github fa-1x p-5"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;