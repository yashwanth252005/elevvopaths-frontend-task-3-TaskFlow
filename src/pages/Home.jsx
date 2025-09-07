import css from './Home.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../App';


function Home() {

    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    // console.log('Current theme:', theme);
    const handleClick = themeContext.toggleTheme;

    return (
        <div className={css.home} id='home' data-theme={theme}>
            <h1 className={css.title} data-theme={theme}>Welcome to TaskFlow</h1>
            <p className={css.subtitle} data-theme={theme}>Your ultimate task management solution.</p>
            <button className={css.btn} data-theme={theme}>Get Started</button>
        </div>
    );
}

export default Home;