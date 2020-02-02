import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-lg-4 text-white text-center">
                    <h3 className="serv mt-3">Location</h3>
                    <p className="text-danger font-weight-bold">MolenGeek</p>
                    <p className="text-danger">Place de la Minoterie 10, 1080 <br></br>Molenbeek-Saint-Jean</p>
                </div>
                <div className="col-sm-12 col-lg-4 text-center">
                    <div>
                        <span className="spanNave p-5">S.K.Y</span>
                    </div>
                    
                    <i className="fas fa-envelope-open-text fa-1x text-danger">   yavas00@hotmail.com</i><br/>
                    <i className="fas fa-phone-volume fa-1x text-danger"> (+32) 486 90 50 69</i>
                </div>
                <div className="col-sm-12 col-lg-4 foot text-center">
                    <a className="link" href="https://www.linkedin.com/in/salih-kadir-yavas/"><i className="fab fa-linkedin-in fa-1x p-5"></i></a>
                    <a className="insta" href="https://www.instagram.com/yavas.03/"><i className="fab fa-instagram fa-1x p-5"></i></a>
                    <a className="git" href="https://github.com/KadirYavas"><i className="fab fa-github fa-1x p-5"></i></a>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 text-center">
                <span className="p-5 serv mt-5"><i className="far fa-copyright fa-1x"></i> 2020 Tous les droits sont réservés.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;