import React from "react";
import PropTypes from "prop-types";

export class Person extends React.Component {
    constructor(props) {
        super()
        this.state = {
            age: props.initialAge
        };
    }

    onMakeOlder = () => {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div>
                <div className="col-sx-10 col-sm-6">
                    <p>I'm {this.props.name} and my age is {this.state.age}</p>
                </div>
                <div className="col-sx-5 col-sm-2">
                    <button onClick={this.onMakeOlder} className="btn btn-primary">Get older</button>
                </div>
            </div>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
}