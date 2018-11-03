import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/people">{props.homeLink}</Link></li>
                    <li><Link to="/user">User</Link></li>
                </ul>
            </div>
        </nav>
    );
};