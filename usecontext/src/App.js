import './App.css';
import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import ToggleTheme from './context/ToggleTheme';
import ThemeComponent from './context/ThemeComponent';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ToggleTheme/>
        <ThemeComponent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
