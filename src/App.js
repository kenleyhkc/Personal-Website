import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import About from './components/About';
import Footer from './components/Footer';
import Works from './components/Works';
import Home from './components/Home';
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import {Helmet} from 'react-helmet';
import { Component } from 'react';

class App extends Component{
    render(){
        return(
                <div>
                    <TopBar />
                    <Home />
                    <div className="container-fluid main">
                        <About />
                        <Skills />
                        <Education />
                        <Works />
                        <Contact />
                        <Footer />
                    </div>
                </div>
        )
    }
}


export default App;
