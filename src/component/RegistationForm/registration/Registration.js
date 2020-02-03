import React from "react";
import reg from './Registration.module.css'
import {NavLink} from "react-router-dom";
import Error from "../error/Error";
import Logo from "../logo/Logo";


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User: {
                name: '',
                email: '',
                password: '',
                repPassword: '',
            },
            nameError: true,
            emailError: true,
            passwordError: true,
            error: '',
        };
        this.onChange = this.onChange.bind(this);   //К данному методу мы использовали функцию байнд для привязки контекста this.
    };

    onChange(event) {        //К данному методу мы использовали функцию байнд для привязки контекста this. В данном методе использовали спрет оператор.
        this.setState({
            User: {
                ...this.state.User,
                [event.target.name]: event.target.value,
            },
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        // Создать метода паролей
        if (this.state.User.password === this.state.User.repPassword) {
            this.setState({
                error: '',
                passwordError: true

            })
        } else {
            this.setState({
                error: 'Пароли не совпадают',
                passwordError: false
            });
            this.setState({
                User: {
                    password: '',
                    repPassword: '',
                }
            });


        }
        if (!this.state.User.password) {
            this.setState({
                error: 'Поле "password" не может быть пустым',
                passwordError: false
            })
        }

        //Создать методы инпута

        if (this.state.User.name === '') {
            this.setState({
                error: 'Поле обязательно для ввода',
                nameError: false,
            });

        } else {
            this.setState({
                nameError: true
            })
        }

        //Создать метод для Email

        if (this.state.User.email === '') {
            this.setState({
                error: 'Поле обязательно для ввода',
                emailError: false,
            });

        } else {
            this.setState({
                emailError: true
            })
        }

        const query = `
             User: {
                name: '',
                email: '',
                password: '',
            }`
        ;
        const url = "http://localhost:4000/api/registration";
        const opts = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query})
        };
        fetch(url, opts)
            .then(res => res.json())
            .then(res => {localStorage.setItem('TOKEN', JSON.stringify(res))})
            .catch(error => {
                this.setState({
                            error: 'Упс, ошибочка вышла хыыы',
                      })
            });
    };


    render() {
        return (
            <div>
                <Logo/>
                <div className={reg.box}>
                    <form className={reg.form} onSubmit={this.onSubmit}>
                        <div className={reg.text}> Задайте электронную почту и пароль для администратора системы</div>

                        <input
                            className={reg.login}
                            placeholder='Введите имя'
                            style={this.state.nameError === false ? {'border-color': 'red'} : {}}
                            name='name'
                            onChange={this.onChange}
                            value={this.state.User.name}
                        />

                        <input
                            style={this.state.emailError === false ? {'border-color': 'red'} : {}}
                            type='email'
                            placeholder='Электронная почта'
                            className={reg.login}
                            name='email'
                            onChange={this.onChange}
                            value={this.state.User.email}
                        />

                        <input type='password'
                               className={reg.password}
                               style={this.state.passwordError === false ? {'border-color': 'red'} : {}}
                               placeholder='Введите пароль'
                               name='password'
                               onChange={this.onChange}
                               value={this.state.User.password}
                        />

                        <input type='password'
                               className={reg.password}
                               style={this.state.passwordError === false ? {'border-color': 'red'} : {}}
                               placeholder='Повторите пароль'
                               name='repPassword'
                               onChange={this.onChange}
                               value={this.state.User.repPassword}
                        />
                        {this.state.error ? (
                            <Error error={this.state.error}/>
                        ) : null}
                        <button className={reg.button}>Применить и войти</button>
                        <NavLink to='/form'>Вернуться</NavLink>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;

//Поле проверки true или false
// поле log - изначально false. После прихода токена поле меняется на true.