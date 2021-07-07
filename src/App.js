import React from 'react';
import './App.css';
import '../src/components/inc/stars.scss'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Intro from './components/inc/Intro';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Skills from './components/pages/Skills';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/">
          <Intro />
          {/*<Home/>*/}
        </Route>
          <Route path="/my_portfoli0">
            <Intro />
          </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contacts">
          <Contact />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
