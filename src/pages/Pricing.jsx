import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import css from './Pricing.module.css';

export default function Pricing() {

    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const handleClick = themeContext.toggleTheme;

    return (
        <div className={css.pricing_container} id='pricing' data-theme={theme}>
            <div className={css.pricing_header_container} data-theme={theme}>
                <h1 className={css.pricing_header} style={{ color: '#007bff', fontSize: '28px', fontWeight: '700', backgroundColor: (theme === 'dark' ? '#03376d' : '#f6f6f6'), padding: '10px' }}>Pricing Plans</h1>
                <div className={css.pricing} data-theme={theme}>
                    <p>$0 /Month</p>
                    <p>$5 /Month</p>
                    <p>$10 /Month</p>
                </div>
            </div>
            <div className={css.pricing_card} data-theme={theme}>
                <div className={css.pricing_features} data-theme={theme}>
                    <ul>
                        <li className={css.pricing_feature} data-theme={theme}>Unlimited Tasks</li>
                        <li className={css.pricing_feature} data-theme={theme}>Basic Task Management</li>
                        <li className={css.pricing_feature} data-theme={theme}>Due Dates </li>
                        <li className={css.pricing_feature} data-theme={theme}>5 Reminders /Day</li>
                        <li className={css.pricing_feature} data-theme={theme}>5 days progress tracking</li>
                    </ul>
                </div>
                <div className={css.pricing_features} data-theme={theme}>
                    <ul>
                        <li className={css.pricing_feature} data-theme={theme}>Unlimited Tasks</li>
                        <li className={css.pricing_feature} data-theme={theme}>All Task Management</li>
                        <li className={css.pricing_feature} data-theme={theme}>Due Dates </li>
                        <li className={css.pricing_feature} data-theme={theme}>10 Reminders /Day</li>
                        <li className={css.pricing_feature} data-theme={theme}>15 days progress tracking</li>
                        <li className={css.pricing_feature} data-theme={theme}>2 Live Collaborations</li>
                    </ul>
                </div>
                <div className={css.pricing_features} data-theme={theme}>
                    <ul>
                        <li className={css.pricing_feature} data-theme={theme}>Unlimited Tasks</li>
                        <li className={css.pricing_feature} data-theme={theme}>Advance Task Management</li>
                        <li className={css.pricing_feature} data-theme={theme}>Due Dates </li>
                        <li className={css.pricing_feature} data-theme={theme}>Unlimited Reminders /Day</li>
                        <li className={css.pricing_feature} data-theme={theme}>Monthly progress tracking</li>
                        <li className={css.pricing_feature} data-theme={theme}>5 Live Collaborations</li>
                        <li className={css.pricing_feature} data-theme={theme}>Priority Support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
