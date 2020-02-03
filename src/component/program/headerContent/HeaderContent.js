import React from "react";
import headCont from './HeaderContent.module.css';

const HeaderContent = () => {

    return (
        <div className={headCont.container}>
            <div className={headCont.head}>Редактирование</div>
            <button className={headCont.button}>Сохранить и вернуться</button>
        </div>
    )
};

export default HeaderContent;