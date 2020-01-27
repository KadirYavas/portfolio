import React from 'react';
import chefUn from '../img/Capturechef1.png'
import chefDeux from '../img/Capturechef2.png'
import chefTrois from '../img/Capturechef3.png'
import chefQuatre from '../img/Capturechef4.png'
import chefCinq from '../img/Capturechef5.png'
import empUn from '../img/Captureemp1.png'
import empDeux from '../img/Captureemp2.png'
import empTrois from '../img/Captureemp3.png'
import empQuatre from '../img/Captureemp4.png'
import cvUn from '../img/cv1.png'
import cvDeux from '../img/cv2.png'
import cvQuatre from '../img/cv4.png'

const Projet = () => {
    return (
        <div id="pro" className="projet p-5">
            <h3 className="text-center text-uppercase serv">Mes projets</h3>
            <ul className="container d-flex justify-content-around">
                <a href=""><li>Projet: Les Chefs</li></a>
                <a href=""><li>Projet: Emporium</li></a>
                <a href=""><li>CV</li></a>
            </ul>
            <img src={chefUn} alt=""/>
            <img src={chefDeux} alt=""/>
            <img src={chefTrois} alt=""/>
            <img src={chefQuatre} alt=""/>
            <img src={chefCinq} alt=""/>
            <img src={empUn} alt=""/>
            <img src={empDeux} alt=""/>
            <img src={empTrois} alt=""/>
            <img src={empQuatre} alt=""/>
            <img src={cvUn} alt=""/>
            <img src={cvDeux} alt=""/>
            <img src={cvQuatre} alt=""/>
        </div>
    )
}

export default Projet;