import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
    return (
    <div>
        <Navbarr/>
        <Home/>
        <Shop/>
        <Footer/>
    </div>
    )
}

export default App