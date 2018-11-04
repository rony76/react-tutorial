import React, { Component } from 'react'
import LinkUpdater from './LinkUpdater';
import { Header } from './Header';

import { connect, Provider } from 'react-redux';
import store from '../store';

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.props.homeLink} />
                    </div>
                </div>

                {this.props.children}

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <LinkUpdater />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        homeLink: state.homeLink
    };
}

const ConnectedRoot = connect(mapStateToProps)(Root);

export default class ReduxAwareRoot extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRoot>
                    {this.props.children}
                </ConnectedRoot>
            </Provider>
        )
    }
}

