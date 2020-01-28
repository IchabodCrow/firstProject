import React from 'react';
import app from './App.module.css';
import Setting from "./component/program/setting/Setting";
import Form from "./component/RegistationForm/form/Form";
import Registration from "./component/RegistationForm/registration/Registration";
import {Redirect, Route, Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import './fonts/fonts.css'

export const customHistory = createBrowserHistory();

export default class App extends React.Component {
    render() {
        return (
            <Router history={customHistory}>
                <div className={app.formBox}>

                    <Route path={'/registration'} render={() => <Registration/>}/>
                    <Route exact path={'/form'} render={() => <Form/>}/>
                </div>
                <div className={app.menuBox}>
                    <Route path={'/board'} render={() => <Setting/>}/>
                </div>


            </Router>
        )
    }
};






