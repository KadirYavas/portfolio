import React, { useState } from 'react';
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

    const [baseChef, setBaseChef] = useState('')
    const [baseEmp, setBaseEmp] = useState('')
    const [baseCV, setBaseCV] = useState('')

    const [carChef, setCarChef] = useState('d-none')
    const [carEmp, setCarEmp] = useState('d-none')
    const [carCV, setCarCV] = useState('d-none')
    

    const chef = () => {
        setBaseEmp('d-none')
        setBaseCV('d-none')
        setBaseChef('d-none')
        setCarEmp('d-none')
        setCarCV('d-none')
        setCarChef('')
    }
    const emp = () => {
        setBaseChef('d-none')
        setBaseCV('d-none')
        setBaseEmp('d-none')
        setCarChef('d-none')
        setCarCV('d-none')
        setCarEmp('')
    }
    const cv = () => {
        setBaseChef('d-none')
        setBaseEmp('d-none')
        setBaseCV('d-none')
        setCarChef('d-none')
        setCarEmp('d-none')
        setCarCV('')
    }
    const all = () => {
        setBaseChef('')
        setBaseEmp('')
        setBaseCV('')
        setCarChef('d-none')
        setCarEmp('d-none')
        setCarCV('d-none')
    }

    return (
        <div id="pro" className="projet p-5">
            <h3 className="text-center text-uppercase serv">Mes projets</h3>
            <ul className="container projet d-flex justify-content-around">
                <li><button onClick={all} className="btnPro"><span>Tous les projets</span></button></li>
                <li><button onClick={chef} className="btnPro"><span>Projet: Les Chefs</span></button></li>
                <li><button onClick={emp} className="btnPro"><span>Projet: Emporium</span></button></li>
                <li><button onClick={cv} className="btnPro"><span>CV</span></button></li>
            </ul>

            <div className="carousel">
                <div id="carouselExampleIndicators" className={"carousel slide " + carChef} data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={chefUn} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={chefDeux} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={chefTrois} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={chefQuatre} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={chefCinq} className="d-block w-50" alt="..."></img>
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



                <div id="carouselExampleIndicators2" className={"carousel slide " + carEmp} data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={empUn} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={empDeux} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={empTrois} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={empQuatre} className="d-block w-50" alt="..."></img>
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



                <div id="carouselExampleIndicators3" className={"carousel slide text-center " + carCV} data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={cvUn} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={cvDeux} className="d-block w-50" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={cvQuatre} className="d-block w-50" alt="..."></img>
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
            </div>

            <div className="text-center">
                <div>
                    <img className={"rounded-circle " + baseChef} src={chefUn} alt="" />
                    <img className={"rounded-circle " + baseChef} src={chefDeux} alt="" />
                    <img className={"rounded-circle " + baseChef} src={chefTrois} alt="" />
                </div>
                <div>
                    <img className={"rounded-circle " + baseChef} src={chefQuatre} alt="" />
                    <img className={"rounded-circle " + baseChef} src={chefCinq} alt="" />
                    <img className={"rounded-circle " + baseEmp} src={empUn} alt="" />
                </div>
                <div>
                    <img className={"rounded-circle " + baseEmp} src={empDeux} alt="" />
                    <img className={"rounded-circle " + baseEmp} src={empTrois} alt="" />
                    <img className={"rounded-circle " + baseEmp} src={empQuatre} alt="" />
                </div>
                <div>
                    <img className={"rounded-circle " + baseCV} src={cvUn} alt="" />
                    <img className={"rounded-circle " + baseCV} src={cvDeux} alt="" />
                    <img className={"rounded-circle " + baseCV} src={cvQuatre} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Projet;