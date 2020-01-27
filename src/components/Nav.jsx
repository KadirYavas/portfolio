import React from 'react';

const Nav = () => {
return (
<div className="row navi">
    <div className="col-1">
        <span className="spanNav p-3">S.K.Y</span>
    </div>
    <div className="offset-2 col-7">
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div className="col-2">
        <a href="https://www.linkedin.com/in/salih-kadir-yavas/"><i class="fab fa-linkedin-in fa-1x p-4"></i></a>
        <a href="https://www.instagram.com/yavas.03/"><i class="fab fa-instagram fa-1x p-4"></i></a>
    </div>
</div>
)
}

export default Nav;