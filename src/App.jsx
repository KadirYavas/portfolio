import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Projet from './components/Projet'
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Skill />
            <Projet />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;