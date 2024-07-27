// App //
import { Routes, Route } from 'react-router-dom';
import '../src/styles/Global.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeAbout from './pages/HomeAbout/HomeAbout';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import Background from './components/Background/Background';

function App() {
  return (
    <div className="app">
      <Background />
      <Cursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeAbout />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
