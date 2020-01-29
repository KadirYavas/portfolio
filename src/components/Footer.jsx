import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-lg-5 text-white">
                    <span className="p-5 servp"><i className="far fa-copyright fa-1x"></i> 2020 Tous les droits sont réservés.</span>
                </div>
                <div className="col-sm-12 col-lg-3">
                    <span className="spanNave p-5">S.K.Y</span>
                    <i className="fas fa-at fa-1x text-danger">   yavas00@hotmail.com</i>
                    <i className="fas fa-phone-volume fa-1x text-danger">   (+32) 486 90 50 69</i>
                </div>
                <div className="col-sm-12 col-lg-4 foot">
                    <a className="link" href="https://www.linkedin.com/in/salih-kadir-yavas/"><i className="fab fa-linkedin-in fa-1x p-5"></i></a>
                    <a className="insta" href="https://www.instagram.com/yavas.03/"><i className="fab fa-instagram fa-1x p-5"></i></a>
                    <a className="git" href="https://github.com/KadirYavas"><i className="fab fa-github fa-1x p-5"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;