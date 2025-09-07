import FeaturesCard from "../components/FeaturesCard";
import css from "./Features.module.css";
import React, { useContext } from 'react';
import { ThemeContext } from '../App';


function Features() {

    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    // console.log('Current theme:', theme);
    const handleClick = themeContext.toggleTheme;

    const features = [
        { icon: "M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v326.34l-66.67 66.66v-213H186.67v420h300.66L554-80H186.67Zm482 20-134-134 46.66-47.33 87 87 173.34-173.34 47.33 47L668.67-60Z", title: "Easy Task Management", description: "Take controll of your productivity by adding tasks in customizable lists" },
        { icon: "M437.33-302.67 662-527.33 613.67-575 437.33-398.67 347.67-489l-50.34 50.33 140 136Zm42 221.34q-74.33 0-139.83-28.17-65.5-28.17-114-77t-77-114Q120-365.67 120-440.67q0-74.33 28.5-139.83 28.5-65.5 77-114.33 48.5-48.84 114-77Q405-800 479.33-800q74.34 0 139.84 28.17 65.5 28.16 114.33 77 48.83 48.83 77 114.33t28.17 139.83q0 75-28.17 140.17-28.17 65.17-77 114t-114.33 77q-65.5 28.17-139.84 28.17Zm-262-785.34L264-820 98-658l-46.67-46.67 166-162Zm524 0 166 162L860.67-658l-166-162 46.66-46.67Z", title: "Smart Reminders", description: "Stay on top of your schedule by setting reminders for tasks and deadlines" },
        { icon: "M38.67-160v-100q0-34.67 17.83-63.17T105.33-366q69.34-31.67 129.67-46.17 60.33-14.5 123.67-14.5 63.33 0 123.33 14.5T611.33-366q31 14.33 49.17 42.83T678.67-260v100h-640Zm706.66 0v-102.67q0-56.66-29.5-97.16t-79.16-66.84q63 7.34 118.66 22.5 55.67 15.17 94 35.5 34 19.34 53 46.17 19 26.83 19 59.83V-160h-176ZM358.67-480.67q-66 0-109.67-43.66Q205.33-568 205.33-634T249-743.67q43.67-43.66 109.67-43.66t109.66 43.66Q512-700 512-634t-43.67 109.67q-43.66 43.66-109.66 43.66ZM732-634q0 66-43.67 109.67-43.66 43.66-109.66 43.66-11 0-25.67-1.83-14.67-1.83-25.67-5.5 25-27.33 38.17-64.67Q578.67-590 578.67-634t-13.17-80q-13.17-36-38.17-66 12-3.67 25.67-5.5 13.67-1.83 25.67-1.83 66 0 109.66 43.66Q732-700 732-634Z", title: "Team Collaboration", description: "Assign tasks to team members and track progress together" },
        { icon: "M80-126.67v-66.66h800v66.66H80Zm40-120V-520h106.67v273.33H120Zm204 0V-720h106.67v473.33H324Zm204.67 0V-600h106.66v353.33H528.67Zm204.66 0V-840H840v593.33H733.33Z", title: "Progress Tracking", description: "Monitor your progress and track monthly acheivements with charts and progress bars" },
    ]
    return (
        <div className={css.features} id="features" style={{ backgroundColor: theme === 'dark' ? '#01254c' : 'white' }} data-theme={theme}>
            <FeaturesCard featuresData={features[0]} />
            <FeaturesCard featuresData={features[1]} />
            <FeaturesCard featuresData={features[2]} />
            <FeaturesCard featuresData={features[3]} />
        </div>
    );
}

export default Features;