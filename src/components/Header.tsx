import React, { useContext } from 'react';
import "../css/Header.css";
import { GlobalContext } from './GlobalState';

function Header() {
    const { theme, changeTheme } = useContext(GlobalContext);
    
    return (
        <div className={`header ${theme ? "light" : "dark"}`}>
            <h1 data-testid="page-title">Where in the world</h1>
            <p onClick={changeTheme}>{theme ? "Light" : "Dark"} mode</p>
        </div>
    )
}

export default Header
