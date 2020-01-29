import React from 'react';
import Web from '../img/web.jpg'

const About = () => {
return (
<div id="about" className="about">
    <div className="dev row p-5">
        <div id="cf" className="col-sm-12 col-lg-6 text-center">
            <img src={Web} alt="" className="devImg w-50" />
        </div>
        <div className="col-sm-12 col-lg-6 text-center">
            <h3 className="text-uppercase serv">A propos de moi.</h3>
            <p className="pAbout">Je suis un Full-Stack Developer habitant à Bruxelles et ayant étudié à MolenGeek. Sur
                le plan personnel, je suis très motivé, axé sur les résultats, autonome, travailleur et rapide, je
                cherche constamment à améliorer mes compétences.</p>
            <button className="btnAbout">
                <a className="col-sm-12" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                    aria-controls="collapseExample" style={{textDecoration: 'none'}}>
                    En savoir plus
                </a>
            </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <ul>
                        <li>Formation Full Stack Developer Web & Mobile - Molengeek</li>
                        <li>Sales Employee - Primark Rue Neuve</li>
                        <li>Formation vendeur & réassortisseur - Bruxelles Formation</li>
                        <li>Formation steward - Bruxelles Formation</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="text-center p-4">
        <button className="text-uppercase btnAbout"><a href="#footer" style={{textDecoration: 'none'}}>Contactez-moi
                !</a></button>
    </div>
</div>
)
}

export default About;