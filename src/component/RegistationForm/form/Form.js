import React from "react";
import form from './form.module.css';
import {NavLink} from "react-router-dom";
import Logo from "../logo/Logo";

import {customHistory} from "../../../App";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
            },
            error: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        if(event){ event.preventDefault()}
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmit = event => {
        if(event) {event.preventDefault()}

        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
               localStorage.setItem('TOKEN', response);
                customHistory.push('/board');
                console.log(response)
            })
            .catch(error => {
                console.log('Жопа')
            })
    };

    render(){
        return (
            <div>
                <Logo/>
                <form
                    className={form.box}
                    onSubmit={this.onSubmit}
                >
                    <div className={form.form}>
                        <div className={form.text}> Введите данные для входа в систему</div>
                        <input
                            type='email'
                            className={form.login}
                            placeholder='Введите email'
                            onChange={this.onChange}
                            name='email'
                            value={this.state.form.email}
                        />
                        <input
                            type='password'
                            className={form.password}
                            placeholder='Введите пароль'
                            onChange={this.onChange}
                            name='password'
                            value={this.state.form.password}
                        />
                        <button className={form.button}>Войти в систему</button>
                        <NavLink className={form.a} to='/registration'>Регистрация</NavLink>

                    </div>
                </form>
            </div>
        )
    }
}

export default Form;