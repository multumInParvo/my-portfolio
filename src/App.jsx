// App //
import { Routes, Route } from 'react-router-dom';
import '../src/styles/Global.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import Background from './components/Background/Background';

function App() {
  return (
    <div className="app">
      <Background />
      <Cursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
