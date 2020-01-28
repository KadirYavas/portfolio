import React, {useEffect} from 'react';
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Projet from './components/Projet'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service';

const App = () => {
    useEffect(() => {
        document.title = 'Portfolio Kadir!'
    })
    

    return (
        <div>
            <Header />
            <About />
            <Service />
            <Skill />
            <Projet />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;