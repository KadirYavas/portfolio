import React, {useState} from 'react';
import HTML from '../img/htmli.png'
import CSS from '../img/cssi.png'
import BOOTSTRAP from '../img/bootstrapi.png'
import JS from '../img/jsi.png'
import REACT from '../img/reacti.png'
import BASH from '../img/bash.png'
import GIT from '../img/giti.png'
import SASS from '../img/sass.png'
import EMMET from '../img/emmet.png'
import VS from '../img/vs.png'

const Skill = () => {

    const [non, setNon] = useState('d-none')
    const [cpt, setCpt] = useState(0)
    const clicke = () => {
        if(cpt % 2 === 0){
            setNon('')
        } else{
            setNon('d-none')
        }
        setCpt(cpt+1)
    }

return (
<div id="skill" className="skill p-5">
    <div className="text-center">
        <h3 className="text-uppercase serv">Mes compétences</h3>
    <p className="servp">Voici quelques languages que je pratique dans le développement web.</p>
    </div>
    <div className="row skillImg">
        <div className="offset-lg-2 col-lg-3">
            <div><img src={HTML} alt="" /></div>
            <div><img src={CSS} alt="" /></div>
            <div><img src={BOOTSTRAP} alt="" /></div>
            <div><img src={JS} alt="" /></div>
            <div><img src={REACT} alt="" /></div>
            <div><img src={SASS} alt=""/></div>
            <div><img src={EMMET} alt=""/></div>
        </div>
        <div className="col-lg-6 d-flex justify-content-around flex-column">
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="90"
                        aria-valuemin="0" aria-valuemax="100">HTML: 90%</div>
                </div>
                
                <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="85"
                        aria-valuemin="0" aria-valuemax="100">CSS: 85%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100">BOOTSTRAP: 80%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75"
                        aria-valuemin="0" aria-valuemax="100">JAVASCRIPT: 75%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: 60 + '%'}} aria-valuenow="60"
                        aria-valuemin="0" aria-valuemax="100">REACT: 60%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100">SASS: 80%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75"
                        aria-valuemin="0" aria-valuemax="100">EMMET: 75%</div>
                </div>
        </div>
    </div>
    <div className="text-center">
        <h3 className="serv">En voici d'autres:</h3>
        <button onClick={clicke} className="btnContacte"><span>Afficher</span></button>
        <div className={"row skillo m-3 " + non}>
            <div className="col-lg-6">
                <div><img src={BASH} alt="" /></div>
                <div><img src={GIT} alt="" /></div>
                <div><img src={VS} alt=""/></div>
            </div>
            <div className="col-lg-6 d-flex justify-content-around flex-column">
            <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: 30 + '%'}} aria-valuenow="30"
                        aria-valuemin="0" aria-valuemax="100">BASH: 30%</div>
            </div>
            <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: 35 + '%'}} aria-valuenow="35"
                        aria-valuemin="0" aria-valuemax="100">GIT: 35%</div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: 45 + '%'}} aria-valuenow="45"
                        aria-valuemin="0" aria-valuemax="100">VS CODE: 45%</div>
                </div>


            </div>
            
        </div>
    </div>
    
</div>
)
}
export default Skill;