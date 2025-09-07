import css from "./FeaturesCard.module.css";
import React, { useContext } from 'react';
import { ThemeContext } from '../App';


function FeaturesCard({ featuresData }) {

    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const handleClick = themeContext.toggleTheme;


    return (
        <div className={css.features_card_container} data-theme={theme}>
            <div className={css.features_card} data-theme={theme}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#007bff"><path d={featuresData.icon} /></svg>
                <h3 data-theme={theme}>{featuresData.title}</h3>
                <p data-theme={theme}>{featuresData.description} </p>
            </div>
        </div>

    );
}

export default FeaturesCard;
