import React from "react";

import { client } from '../../../App'
import reg from './Registration.module.css'
import {NavLink} from "react-router-dom";
import Error from "../error/Error";
import Logo from "../logo/Logo";
import {Mutation} from "@apollo/react-components";
import gql from "graphql-tag";

const SIGN_UP = gql`
  mutation signup($firstName: String!, $secondName: String!, $email: String!, $password: String!) {
      signup(firstName: $firstName, secondName: $secondName, email: $email, password: $password)
  }
`;

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
        this.onChange = this.onChange.bind(this);
    };

    onChange(event) {
        this.setState({
            User: {
                ...this.state.User,
                [event.target.name]: event.target.value,
            },
        });
    };

    onSubmit = (signUp) => (event) => {
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
        const { User: { name: firstName, email, password } } = this.state;
        signUp({ variables: { firstName, email, password, secondName: 'Jonson' } });

        // client
        // const query = `
        //      User: {
        //         name: '${name}',
        //         email: '${email}',
        //         password: '${password}',
        //     }`
        // ;
        // const url = "http://localhost:4000/api/registration";
        // const opts = {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({ name, email, password })
        // };
        // fetch(url, opts)
        //     .then(res => res.json())
        //     .then(res => {localStorage.setItem('TOKEN', JSON.stringify(res))})
        //     .catch(error => {
        //         this.setState({
        //                     error: 'Упс, ошибочка вышла хыыы',
        //               })
        //     });
    };


    render() {
        return (
            <div>
                <Logo/>
                <div className={reg.box}>
                    <Mutation mutation={SIGN_UP}>
                        {(signUp, { loading, error, data }) => {
                            console.warn({ loading, error, data })
                            if (data) this.handleToken(data);
                            return (
                                <form className={reg.form} onSubmit={this.onSubmit(signUp)}>
                                    <div className={reg.text}> Задайте электронную почту и пароль для администратора
                                        системы
                                    </div>

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
                            );
                        }}
                    </Mutation>
                </div>
            </div>
        );
    }
}

export default Registration;