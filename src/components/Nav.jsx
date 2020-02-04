import React, { useState, useEffect } from 'react';


const Nav = () => {

    const [scrolle, setScrolle] = useState('')
    const [aaa, setAaa] = useState('animated rollIn')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 520){
                setScrolle('stick')
            }
            else {
                setScrolle('')
            }
        })
    })
    



return (
<div className={"row navig d-flex justify-content-around " + scrolle}>
    <div className={"col-lg-2 " + aaa}>
        <span className={"spanNav p-3"}>S.K.Y</span>
    </div>
    <div className="col-lg-8 col-md-10">
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#top">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#service">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skill">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pro">Projets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    </div>
</div>
)
}

export default Nav;