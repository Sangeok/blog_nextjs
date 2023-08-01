'use client';

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

export default function ThemeButton() {
    const {theme, setTheme} = useTheme();

    return (
        <button onClick={()=>{
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }}>
            {theme === 'dark' ? (
                <FontAwesomeIcon icon={faSun}/>
            ) : (
                <FontAwesomeIcon icon={faMoon}/>
            )}
        </button>
    )
}