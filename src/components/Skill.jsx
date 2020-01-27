import React from 'react';
import HTML from '../img/htmli.png'
import CSS from '../img/cssi.png'
import BOOTSTRAP from '../img/bootstrapi.png'
import JS from '../img/jsi.png'
import REACT from '../img/reacti.png'
import BASH from '../img/bash.png'
import GIT from '../img/giti.png'

const Skill = () => {
return (
<div className="skill p-5">
    <div className="text-center">
        <h3 className="text-uppercase">Mes compétences</h3>
    <p>Voici quelques languages que je pratique dans le développement web.</p>
    </div>
    <div className="row skillImg">
        <div className="offset-3 col-3">
            <div><img src={HTML} alt="" /></div>
            <div><img src={CSS} alt="" /></div>
            <div><img src={BOOTSTRAP} alt="" /></div>
            <div><img src={JS} alt="" /></div>
            <div><img src={REACT} alt="" /></div>
            <div><img src={BASH} alt="" /></div>
            <div><img src={GIT} alt="" /></div>
        </div>
        <div className="col-6 d-flex justify-content-around flex-column">
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90"
                        aria-valuemin="0" aria-valuemax="100">HTML: 90%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="85"
                        aria-valuemin="0" aria-valuemax="100">CSS: 85%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100">BOOTSTRAP: 80%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75"
                        aria-valuemin="0" aria-valuemax="100">JAVASCRIPT: 75%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: 60 + '%'}} aria-valuenow="60"
                        aria-valuemin="0" aria-valuemax="100">REACT: 60%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: 50 + '%'}} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">BASH: 50%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: 50 + '%'}} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">GIT: 50%</div>
                </div>
        </div>

    </div>

</div>
)
}

export default Skill;