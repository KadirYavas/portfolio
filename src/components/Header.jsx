import React from 'react';
import Nav from './Nav.jsx'

const Header = () => {
return (
<div className="fond text-white">
    <Nav />
    <div className="row text-center">
        <div className="col-5">
            <h1 className="typewriter colorHead font-weight-bold">Salih Kadir YAVAS</h1>
            <h4 className="colorHead font-weight-bold">Je suis un développeur web</h4>
            <button className="btnHeader text-uppercase">Voir mes travaux</button>
        </div>
    </div>
</div>
)
}

export default Header;