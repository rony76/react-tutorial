import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class LinkUpdater extends Component {
    constructor(props) {
        super();
        this.state = {
            link: props.initialLink
        }
    }

    onLinkLabelChange = (e) => {
        this.setState({
            link: e.target.value
        });
    }

    onUpdateButtonChange = () => {
        this.props.changeLink(this.state.link);
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
                        onClick={this.onUpdateButtonChange}>Update</button>
                </div>
            </div>
        )
    }
}

LinkUpdater.propTypes = {
    changeLink: PropTypes.func,
    initialLink: PropTypes.string
}