import React, {useEffect, useState} from 'react';
import DEV from '../img/dev.png'
import SOCIAL from '../img/social.png'
import RES from '../img/res.png'

const Service = () => {

    const [tit, setTit] = useState('hiddens')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 700){
                setTit('animated slideInUp')
            }
        })
    })

    return (
        <div id="service">
            <div className="text-center p-4">
                <h3 className={"text-uppercase serv " + tit}>Service</h3>
                <p className="servp">Les services que je peux vous offrir.</p>
            </div>
            <div className="service row text-center p-3">
                <div className="col-sm-12 col-lg-4">
                    <img src={DEV} alt="" className="p-3 imgDev"/>
                    <h4 className="serv">Website Development</h4>
                    <p className="servp">Le processus de développement web implique de prendre les éléments graphiques définis dans le processus de conception et de les coder dans un thème Wordpress personnalisé.</p>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <img src={SOCIAL} alt="" className="p-3 imgDev"/>
                    <h4 className="serv">Social Media Integration</h4>
                    <p className="servp">L’intégration des médias sociaux permet à votre site Web de publier des mises à jour sur Facebook, d’afficher un fil Twitter et de créer des liens vers vos comptes de médias sociaux.</p>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <img src={RES} alt="" className="p-3 imgDev"/>
                    <h4 className="serv">Responsive Website Design</h4>
                    <p className="servp">Avoir une mise en page réactive signifie que votre site Web redimensionne facilement pour une visualisation optimale indépendamment de la taille de l’écran ou de l’appareil (par ex. iPhone, iPad).</p>
                </div>
            </div>
        </div>
    )
}

export default Service;