import React from "react";
import error from './Error.module.css'
import form from "../form/form.module.css";
import log from "../form/attention.png";

 export default Error = (props) => {
    return (
        <div className={error.container}>
            <div className={form.warning}>
                <img src={log} className={error.log}/>
                <p className={error.text}> {props.error} </p>
            </div>

        </div>
    )
};

