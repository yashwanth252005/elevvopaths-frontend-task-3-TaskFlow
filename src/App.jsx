import './App.css';
import AboutUs from './pages/AboutUs';
import Features from './pages/Features';
import Header from './pages/Header'
import Home from './pages/Home';
import React, { createContext } from 'react';
import { useState } from 'react';
import Pricing from './pages/Pricing';
import Footer from './pages/Footer';

export const ThemeContext = createContext(); // Default value

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <div className="App" data-theme={theme} style={{ backgroundColor: theme === 'dark' ? '#01254cdd' : '#f6f6f6' }} >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <Home />
        <Features />
        <AboutUs />
        <Pricing />
        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;