import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">{props.homeLink}</a></li>
                    <li><a href="#">User</a></li>
                </ul>
            </div>
        </nav>
    );
};