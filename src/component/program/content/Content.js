import React from "react";
import content from './Content.module.css';

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={content.content}>
                <form className={content.form}>
                    <span className={content.name}>Имя</span>
                    <input
                        className={content.input}

                        name={'name'}
                    />

                    <span className={content.name}>Фамилия</span>
                    <input
                        className={content.input}
                        name={'surName'}
                    />
                    <div></div>
                    <button className={content.button}>Сохранить изменения</button>

                </form>
                <form className={content.form}>
                    <span className={content.name}>Электронная почта</span>
                    <input className={content.input}/>

                    <span className={content.name}>Введите пароль</span>
                    <input className={content.input}/>
                    <div></div>
                    <button className={content.button}>Сохранить изменения</button>

                </form>
            </div>
        )
    }

}

export default Content;