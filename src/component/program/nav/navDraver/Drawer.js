import React from "react";
import classes from './Drawer.module.css'
import Nav from "../Nav";
const links = [
    1,2,3
];

class Drawer extends React.Component {
    render(){
        return (
            <Nav className={classes.Drawer}/>
        )
    }
}

export default Drawer;