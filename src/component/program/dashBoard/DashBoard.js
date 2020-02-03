import React from "react";
import dash from './DashBoard.module.css'
import ref from './ref.png'
import time from './time.png'
import time2 from './time2.png'
import mans from './mans.png'
import dat from './dat.png'
import content from "../content/Content.module.css";

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={content.content}>
                <div className={dash.form}>

                    <div className={dash.nameBlock}>
                        Рассмотрение кредитной заявки
                    </div>

                    <div className={dash.data}>

                        <div className={dash.firstData}>
                            <span className={dash.firstData}>  <img src={ref} className={dash.img}/>   304304</span>
                            <p className={dash.underNumb}>выполнено раз</p>
                        </div>

                        <div className={dash.secondData}>

                            <div>
                                    <span className={dash.numb}>
                                        <img src={time} className={dash.img}/>
                                        10 ч 36 мин
                                    </span>
                                <p className={dash.underNumb}>среднее время выполнения</p>
                            </div>

                            <div>
                                    <span className={dash.numb}>
                                        <img src={time2} className={dash.img}/>
                                        1 ч 7 мин (10,5%)
                                    </span>
                                <p className={dash.underNumb}>среднее активное время</p>
                            </div>

                        </div>
                        <div className={dash.secondData}>
                            <div>

                                    <span className={dash.numb}>
                                        <img src={mans} className={dash.img}/>
                                        120 сотрудников
                                    </span>
                                <p className={dash.underNumb}>учавствует в процессе</p>
                            </div>
                            <div>

                                    <span className={dash.numb}>
                                        <img src={dat} className={dash.img}/>
                                        129 сценариев
                                    </span>
                                <p className={dash.underNumb}>в процессе</p>
                            </div>
                        </div>
                        <div className={dash.procesTime}>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Начало</span>
                                <span> 11 ноября 2017</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Окончание</span>
                                <span> 11 ноября 2017</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Загрузка</span>
                                <span> 11 ноября 2017</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}