import React from 'react';
import "../css/Header.css";

function Header() {
    return (
        <div className="header">
            <h1 data-testid="page-title">Where in the world</h1>
            <p>Dark mode</p>
        </div>
    )
}

export default Header
