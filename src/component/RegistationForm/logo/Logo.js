import React from "react";
import logo from './logo.module.css';
import log from './logo.png';
const Logo = () => {
    return (
        <div className={logo.box}><img className={logo.logo} src={log}/></div>
    )
};

export default Logo;