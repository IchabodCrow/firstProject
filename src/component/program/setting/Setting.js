import React from "react";
import setting from "./Ppp.module.css";
import Header from "../header/Header";
import HeaderContent from "../headerContent/HeaderContent";
import Nav from "../nav/Nav";
import Content from "../content/Content";
import ProcessData from "../ProcessData/ProcessData";
import DashBoard from "../dashBoard/DashBoard";

const Setting = () => {

    return (
        <div className={setting.container}>
            <Header/>
            {/*<HeaderContent/>*/}
            <Nav/>



            <ProcessData/>


        </div>
    )
};

export default Setting;