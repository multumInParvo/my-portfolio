// App //
import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeAbout from './pages/HomeAbout/HomeAbout';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import Background from './components/Background/Background';
import NotFound from './pages/NotFound/NotFound';
import './styles/Theme.scss'
import '../src/styles/Global.scss';

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="app">
          <Background />
          <Cursor />
          <Header />
          <main>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
              >
                <Routes location={location}>
                  <Route path="/" element={<HomeAbout />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
