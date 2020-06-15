import React from 'react';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Landing from './components/layouts/Landing'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <div className="container">
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>

        </div>
        <Footer />
      </div >
    </Router>

  );
}

export default App;
