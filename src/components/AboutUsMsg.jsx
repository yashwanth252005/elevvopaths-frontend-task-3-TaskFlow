import css from './AboutUsMsg.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function AboutUsMsg() {

    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const handleClick = themeContext.toggleTheme;

    return (
        <div className={css.about_us_card} data-theme={theme}>
            <h2 data-theme={theme}>About Task Flow</h2>
            <p>
                Task Flow is a modern web application designed to streamline your workflow and boost productivity. Easily manage tasks, track progress, and collaborate with your team in a simple, intuitive interface. Experience seamless organization and efficiency with Task Flow.
            </p>
        </div>
    );
}
