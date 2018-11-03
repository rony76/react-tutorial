import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div>
                <p>I'm { this.props.name } and my age is { this.state.age }</p>
                <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number
}