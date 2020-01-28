import React from "react";
import header from './Header.module.css'
import icon from './Union.png'

 const Header = () => {
        return (
            <div className={header.box}>
                <div className={header.header}>
                    <img  src={icon} className={header.icon}/>
                    <span>Меню</span>
                </div>
            </div>

        )
};

export default Header


