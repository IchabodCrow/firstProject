import React from "react";
import DashBoard from "../dashBoard/DashBoard";
import pData from './ProcessData.module.css'

const ProcessData = () => {
    return (
            <div className={pData.container}>
                <DashBoard/>
                <DashBoard/>
                <DashBoard/>
                <DashBoard/>
            </div>
        )
}
export default ProcessData;