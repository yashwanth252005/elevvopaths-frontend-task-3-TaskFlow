
import css from './AboutUs.module.css'
import AboutUsMsg from '../components/AboutUsMsg'
import Reviews from '../components/Reviews'
import React, { useContext } from 'react';
import { ThemeContext } from '../App';


export default function AboutUs() {

    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    // console.log('Current theme:', theme);
    const handleClick = themeContext.toggleTheme;

    return (
        <div className={css.aboutus} id='aboutus' data-theme={theme} style={{ backgroundColor: theme === 'dark' ? '#01254cdd' : '#fff', padding: '2rem 0' }}>
            <AboutUsMsg />
            <Reviews />
        </div>
    )
}
