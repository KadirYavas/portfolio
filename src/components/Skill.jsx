import React from 'react';
import HTML from '../img/html.png'
import CSS from '../img/css.png'
import BOOTSTRAP from '../img/bootstrap.png'
import JS from '../img/javascript.png'
import REACT from '../img/react.png'
import BASH from '../img/bash.png'

const Skill = () => {
return (
<div className="skill">
    <h3 className="text-uppercase">Mes compétences</h3>
    <p>Voici quelques languages que je pratique dans le développement web.</p>
    <div className="row container">
        <div className="col-4 skillDiv text-center d-flex justify-content-around">
            <div className="card">
                <img className="card-img-top skillImg" src={HTML} alt=""/>
                    <h5 className="card-title mt-4">HTML</h5>
            </div>
        </div>
        <div className="col-4 skillDiv text-center d-flex justify-content-around">
            <div className="card">
                <img className="card-img-top skillImg" src={CSS} alt=""/>
                    <h5 className="card-title mt-4">CSS</h5>
            </div>
        </div>
        <div className="col-4 skillDiv text-center d-flex justify-content-around">
            <div className="card">
                <img className="card-img-top skillImg" src={BOOTSTRAP} alt=""/>
                    <h5 className="card-title mt-4">BOOTSTRAP</h5>
            </div>
        </div>
    </div>
    <div className="row container">
        <div className="col-4 skillDiv text-center d-flex justify-content-around">
            <div className="card">
                <img className="card-img-top skillImg" src={JS} alt=""/>
                    <h5 className="card-title mt-4">JAVASCRIPT</h5>
            </div>
        </div>
        <div className="col-4 skillDiv text-center d-flex justify-content-around">
            <div className="card">
                <img className="card-img-top skillImg" src={REACT} alt=""/>
                    <h5 className="card-title mt-4">REACT</h5>
            </div>
        </div>
        <div className="col-4 skillDiv text-center d-flex justify-content-around">
            <div className="card">
                <img className="card-img-top skillImg" src={BASH} alt=""/>
                    <h5 className="card-title mt-4">BASH</h5>
            </div>
        </div>
    </div>
</div>
)
}

export default Skill;