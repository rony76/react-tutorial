import React from "react";
import { Route, Link } from "react-router-dom";

const SingleLink = ({ link, name }) => (
    <Route
        path={link}
        children={({ match }) => (
            <li className={match ? "active" : ""}>
                <Link to={link}>{name}</Link>
            </li>
        )}
    />
);

export const Header = (props) => {
    console.log("In Header", props);
    const linkData = [
        {
            name: props.homeLink,
            link: "/people"
        },
        {
            name: "User",
            link: "/user/4353"
        }
    ];

    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    {linkData.map((d, idx) => (
                        <SingleLink key={idx} {...d} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};