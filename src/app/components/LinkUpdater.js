import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LinkUpdater extends Component {
    constructor(props) {
        super();
        this.state = {
            link: props.homeLink
        }
    }

    onLinkLabelChange = (e) => {
        this.setState({
            link: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="new-link">Link label</label>
                    <input
                        type="text"
                        value={this.state.link}
                        onChange={this.onLinkLabelChange}
                        className="form-control"
                        name="new-link"
                        id="new-link" />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.props.updateHomeLink(this.state.link)}>Update</button>
                </div>
            </div>
        )
    }
}

LinkUpdater.propTypes = {
    changeLink: PropTypes.func,
    initialLink: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        homeLink: state.homeLink
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateHomeLink: (newLink) => dispatch({
            type: 'MNU_UPDATE_HOME',
            payload: newLink
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkUpdater);