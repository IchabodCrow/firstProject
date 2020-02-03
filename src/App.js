import React from 'react';
import ReactDOM from 'react-dom';
import app from './App.module.css';
import Setting from "./component/program/setting/Setting";
import Form from "./component/RegistationForm/form/Form";
import Registration from "./component/RegistationForm/registration/Registration";
import {Redirect, Route, Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import WebFont from 'webfontloader';

import { ApolloProvider } from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
WebFont.load({
    google: {
        families: ['Open Sans', 'sans-serif']
    }
});

const token = "TOKEN";

const httpLink = {
    uri: 'http://localhost:4000/api',
    headers: {
        authorization: `Bearer ${token}`
    }
};

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});


export const customHistory = createBrowserHistory();

export default class App extends React.Component {

    render() {
        return (
            <ApolloProvider client={client}>
                <Router history={customHistory}>
                    <div className={app.formBox}>

                        <Route path={'/registration'} render={() => <Registration/>}/>
                        <Route exact path={'/form'} render={() => <Form/>}/>
                    </div>
                    <div className={app.menuBox}>
                        <Route path={'/board'} render={() => <Setting/>}/>

                    </div>
                </Router>
            </ApolloProvider>

        )
    }
};






