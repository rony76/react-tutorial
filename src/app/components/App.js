import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';

import Root from '../containers/Root';
import { People } from './People';
import { User } from './User';

import { Component } from 'react'

import store from '../store';
import { Provider } from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Root>
                        <Route exact path='/' component={People} />
                        <Route path='/people' component={People} />
                        <Route path='/user/:userId' component={User} />
                    </Root>
                </Router>
            </Provider>
        );
    }
}
