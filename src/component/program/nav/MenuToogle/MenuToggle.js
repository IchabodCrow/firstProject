import React from "react";
import classes from './MenuToggle.css';

const MenuToogle = props => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ]

    if(props.isOpen) {
        cls.push('fa-items')
        cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
           className={ cls.join(' ')}
           onClick={props.onToggle}
        />
    )
};

export default MenuToogle