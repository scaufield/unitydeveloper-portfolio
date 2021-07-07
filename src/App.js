import React from 'react';
import './style.scss';
import Navbar from './components/common/Navbar/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './components/pages/Projects';
import Skills from "./components/pages/Skills";
import ScrollToTop from "./assets/js/ScrollToTop";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/projects' component={Projects}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
