import React, { useState, useEffect } from 'react';

const Nav = () => {

    const [scro, setScro] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(parseInt(window.scrollY))
            if(window.scrollY > 520){
                setScro('stick')
            }
            else {
                setScro('')
            }
        })
    })

return (
<div className={"row navi " + scro}>
    <div className="col-1">
        <span className="spanNav p-3">S.K.Y</span>
    </div>
    <div className="offset-2 col-7">
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
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
    <div className="col-2">
        <a href="https://www.linkedin.com/in/salih-kadir-yavas/"><i className="fab fa-linkedin-in fa-1x p-4"></i></a>
        <a href="https://www.instagram.com/yavas.03/"><i className="fab fa-instagram fa-1x p-4"></i></a>
        <a href="https://github.com/KadirYavas"><i className="fab fa-github fa-1x p-4"></i></a>
    </div>
</div>
)
}

export default Nav;