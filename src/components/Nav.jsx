import React, { useState, useEffect } from 'react';


const Nav = () => {

    const [scrolle, setScrolle] = useState('')

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
<div className={"row navig " + scrolle}>
    <div className="col-1">
        <span className="spanNav p-3">S.K.Y</span>
    </div>
    <div className="col-6 offset-2">
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
    <div className="col-lg-3">
        <a href="https://www.linkedin.com/in/salih-kadir-yavas/"><i className="fab fa-linkedin-in fa-1x p-4"></i></a>
        <a href="https://www.instagram.com/yavas.03/"><i className="fab fa-instagram fa-1x p-4"></i></a>
        <a href="https://github.com/KadirYavas"><i className="fab fa-github fa-1x p-4"></i></a>
    </div>
</div>
)
}

export default Nav;