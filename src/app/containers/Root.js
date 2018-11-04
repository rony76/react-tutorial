import React, { Component } from 'react'
import LinkUpdater from '../components/LinkUpdater'
import { Header } from '../components/Header'
import { connect } from 'react-redux'

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

export default connect(mapStateToProps)(Root)

