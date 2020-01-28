import React from "react";
import content from './Content.module.css';

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: '',
                surName: '',
            }
        };
        this.onChange = this.onChange.bind(this);

    }
    onChange(event){
        if(event) {event.preventDefault()}
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        });
        console.log(this.state.form.name);
        console.log(this.state.form.surName);
    }

    onSubmit(event){

    }

    render(){
        return (
            <div className={content.content}>
                <form className={content.form}>
                    <span className={content.name}>Имя</span>
                    <input
                        className={content.input}
                        value={this.state.form.name}
                        name={'name'}
                        onChange={this.onChange}

                    />

                    <span className={content.name}>Фамилия</span>
                    <input
                        className={content.input}
                        value={this.state.form.surName}
                        name={'surName'}
                        onChange={this.onChange}
                    />

                </form>
                <form className={content.form}>
                    <span className={content.name}>Электронная почта</span>
                    <input className={content.input}/>

                    <span className={content.name}>Введите пароль</span>
                    <input className={content.input}/>
                    <div></div>
                    <div className={content.button}><span className={content.span}>Сменить пароль</span></div>

                </form>
            </div>
        )
    }

};

export default Content;