import React from "react";
import setting from "./Ppp.module.css";
import Header from "../header/Header";
import HeaderContent from "../headerContent/HeaderContent";
import Nav from "../nav/Nav";
import Content from "../content/Content";
import Drawer from "../nav/navDraver/Drawer";

class Setting extends  React.Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className={setting.container}>
                <Header/>
                <HeaderContent/>
                <Nav/>
                <Content/>
            </div>
        )
    }

};

export default Setting;