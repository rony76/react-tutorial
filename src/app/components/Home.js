import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

    render() {
        let hobbyList = this.props.hobbies.map((hobby, idx) => 
            <li key={idx}>{hobby}</li>
        )
        return (
            <div>
                <p>I'm { this.props.name } and my age is { this.props.age }</p>
                <p>My hobbies are: { hobbyList} </p>
                <ul>{ }</ul>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array
}