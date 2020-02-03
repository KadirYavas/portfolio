import React, { useState, useEffect } from 'react';
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

    const [hide, setHide] = useState(true)
    const [carUn, setCarUn] = useState(false)
    const [carDeux, setCarDeux] = useState(false)
    const [carTrois, setCarTrois] = useState(false)


const chef = () => {
    setCarUn(true)
    setHide(false)
    setCarDeux(false)
    setCarTrois(false)
}
const emp = () => {
    setCarDeux(true)
    setHide(false)
    setCarUn(false)
    setCarTrois(false)
}
const cv = () => {
    setCarTrois(true)
    setHide(false)
    setCarUn(false)
    setCarDeux(false)
}
const all = () => {
    setHide(true)
    setCarUn(false)
    setCarDeux(false)
    setCarTrois(false)
}

const [animHaut, setAnimHaut] = useState('hiddens')
const [animGauche, setAnimGauche] = useState('hiddens')
const [animBas, setAnimBas] = useState('hiddens')
const [animDroite, setAnimDroite] = useState('hiddens')
const [animMid, setAnimMid] = useState('hiddens')
const [roll, setRoll] = useState('hiddens')

useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 2380){
            setAnimHaut('animated bounceInDown')
            setAnimGauche('animated bounceInLeft')
            setAnimBas('animated bounceInUp')
            setAnimDroite('animated bounceInRight')
            setAnimMid('animated bounceIn')
        }
    })
})

useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 2000){
            setRoll('animated rollIn')
        }
    })
})

const [tit, setTit] = useState('hiddens')

useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 1900){
            setTit('animated slideInUp')
        }
    })
})

return (
<div id="pro" className="projet p-5">
    <h3 className={"text-center text-uppercase serv " + tit}>Mes projets</h3>
    <ul className="container projet d-flex justify-content-around">
        <li><button onClick={all} className={"btnPro " + roll}><span>Tous les projets</span></button></li>
        <li><button onClick={chef} className={"btnPro " + roll}><span>Projet: Les Chefs</span></button></li>
        <li><button onClick={emp} className={"btnPro " + roll}><span>Projet: Emporium</span></button></li>
        <li><button onClick={cv} className={"btnPro " + roll}><span>CV</span></button></li>
    </ul>

    <div className="carousel">
        {carUn == true &&
<div id="carouselExampleIndicators" className={"carousel slide "} data-ride=" carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={chefUn} className="d-block img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={chefDeux} className="d- img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={chefTrois} className="d- img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={chefQuatre} className="d- img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={chefCinq} className="d- img-fluid" alt="..."></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-warning rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-warning rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        }
        


        {carDeux == true &&
<div id="carouselExampleIndicators2" className={"carousel slide "} data-ride=" carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={empUn} className="d-block img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={empDeux} className="d-block img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={empTrois} className="d-block img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={empQuatre} className="d-block img-fluid" alt="..."></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-warning rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-warning rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        }
        


        {carTrois == true && 
 <div id="carouselExampleIndicators3" className={"carousel slide text-center "} data-ride=" carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cvUn} className="d-block img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={cvDeux} className="d-block img-fluid" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={cvQuatre} className="d-block img-fluid" alt="..."></img>
                </div>-
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-warning rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-warning rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        }
       
    </div>
    {hide == true && 
    <div className="row propro">
    <div className="columnpro">
      <img src={chefUn}></img>
      <img src={chefDeux}></img>
      <img src={chefTrois}></img>
    </div>
    <div className="columnpro">
      <img src={chefCinq}></img>
      <img src={empUn}></img>
      <img src={empDeux}></img>
      <img src={empTrois}></img>
    </div>
    <div className="columnpro">
      <img src={empQuatre}></img>
      <img src={cvUn}></img>
      <img src={cvDeux}></img>
      <img src={cvQuatre}></img>
    </div>
  </div>
    }
    

</div>
)
}

export default Projet;