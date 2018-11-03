import React from "react";

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