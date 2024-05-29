import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>My Portfolio</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Deep's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
