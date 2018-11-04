import React, { Component } from 'react'
import { LinkUpdater } from './LinkUpdater';
import { Header } from './Header';

export class Root extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onChangeLink = (newName) => {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} urlMatch={this.props.match}/>
                    </div>
                </div>

                { this.props.children }

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <LinkUpdater initialLink={this.state.homeLink} changeLink={this.onChangeLink} />
                    </div>
                </div>
            </div>
        )
    }
}
