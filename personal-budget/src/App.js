import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import Home from './views/Home/Home';
import About from './views/About/About';
import Login from './views/Login/Login';

function App() {
    return (
        <Router>
            <Menu/>
            <Hero/>
            <div className="mainContainer">
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
