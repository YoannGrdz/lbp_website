import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import TransitionOne from './components/Transition_one';
import Menu from './components/Menu';
import TransitionTwo from './components/Transition_two';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <TransitionOne />
      <Menu />
      <TransitionTwo />
      <Shop />
      <News />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
