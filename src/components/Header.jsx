import React from 'react';
import Nav from './Nav.jsx'

const Header = () => {
return (
<div id="top" className="fond text-white">
    <Nav />
    <div id="rower" className="row text-center">
        <div className="col-12">
            <h1 className="typewriter colorHead font-weight-bold">Salih Kadir YAVAS</h1>
            <h4 className="colorHead font-weight-bold">Je suis un développeur web</h4>
            <button className="btnHeader text-uppercase"><a href="#pro" style={{textDecoration: 'none'}}>Voir mes travaux</a></button>
        </div>
    </div>
</div>
)
}

export default Header;