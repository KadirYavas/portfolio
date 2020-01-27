import React from 'react';
import Web from '../img/web.jpg'

const About = () => {
return (
<div id="about" className="about">
    <div className="row p-5">
        <div className="col-6 text-center">
            <img src={Web} alt=""/>
        </div>
        <div className="col-6 text-center">
            <h3 className="text-uppercase serv">A propos de moi.</h3>
            <p className="pAbout">Je suis un Full-Stack Developer habitant à Bruxelles et ayant étudié à MolenGeek. Sur le plan personnel, je suis très motivé, axé sur les résultats, autonome, travailleur et rapide, je cherche constamment à améliorer mes compétences.</p>
        </div>
    </div>
    <div className="text-center p-4">
        <button className="text-uppercase btnAbout"><a href="#footer" style={{textDecoration: 'none'}}>Contactez-moi !</a></button>
    </div>
    
</div>
)
}

export default About;