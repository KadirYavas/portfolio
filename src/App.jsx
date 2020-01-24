import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Projet from './components/Projet'

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Skill />
            <Projet />
        </div>
    )
}

export default App;