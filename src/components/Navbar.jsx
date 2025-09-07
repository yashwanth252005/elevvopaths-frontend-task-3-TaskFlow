import css from './Navbar.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../App';



function Navbar() {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const handleClick = themeContext.toggleTheme;

    const path_d = (theme === 'dark' ? "M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-446.67H40v-66.66h160v66.66Zm720 0H760v-66.66h160v66.66ZM446.67-760v-160h66.66v160h-66.66Zm0 720v-160h66.66v160h-66.66ZM260-655.33l-100.33-97 47.66-49 96 100-43.33 46Zm493.33 496-97.66-100.34 45-45.66 99.66 97.66-47 48.34Zm-98.66-541.34 97.66-99.66 49 47L702-656l-47.33-44.67ZM159.33-207.33 259-305l46.33 45.67-97.66 99.66-48.34-47.66Z" : "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q10 0 20.5.67 10.5.66 24.17 2-37.67 31-59.17 77.83T444-660q0 90 63 153t153 63q53 0 99.67-20.5 46.66-20.5 77.66-56.17 1.34 12.34 2 21.84.67 9.5.67 18.83 0 150-105 255T480-120Z"); // Replace with your SVG path data
    const fillColor = (theme === 'dark' ? "#007bff" : "#000000");


    return (
        <nav>
            <div className={css.navbar} data-theme={theme}>
                <div className={css.logo} data-theme={theme}>
                    <div>TaskFlow</div>
                </div>
                <div className={css.menu} data-theme={theme}>
                    <ul>
                        <li className={css.menutext} data-theme={theme}>Add your first task by clicking <button>Add Task</button></li>
                        <li className={css.menuItem} data-theme={theme} ><a href='/' className='home'> Home </a></li>
                        <li className={css.menuItem} data-theme={theme} ><a href='#features' className='features'>Features</a></li>
                        <li className={css.menuItem} data-theme={theme} ><a href='#aboutus' className='aboutus'> About us</a></li>
                        <li className={css.menuItem} data-theme={theme} ><a href='#pricing' className='pricing'> Pricing</a></li>
                        <li className={css.menuItem} data-theme={theme} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill={fillColor} ><path d={path_d} /></svg></li>
                        <li data-theme={theme}><button className={css.button}>Login</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;