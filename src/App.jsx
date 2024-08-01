// App //
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeAbout from './pages/HomeAbout/HomeAbout';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import Background from './components/Background/Background';
import './styles/Theme.scss'
import '../src/styles/Global.scss';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
