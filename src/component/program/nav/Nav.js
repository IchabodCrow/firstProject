import React from "react";
import nav from './Nav.module.css';


class Nav extends React.Component {

    render(){
        return (
            <nav className={nav.bar}>
                <a href='#' className={nav.link}>Общие данные</a>
                <a href='#' className={nav.link}>Личные данные</a>
                <a href='#' className={nav.link}>Данные</a>
                <a href='#' className={nav.link}>Не данные</a>
            </nav>
        )
    }
}

export default Nav;