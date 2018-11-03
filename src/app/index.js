import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { LinkUpdater } from "./components/LinkUpdater";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onChangeLink = (newName) => {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        let homes = [
            {
                name: 'Rony',
                initialAge: 42,
            },
            {
                name: 'Ariela',
                initialAge: 44,
            },
        ];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>

                {
                    homes.map((h) => 
                    <div key={h.name} className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <Home {...h}/>
                        </div>
                    </div>
                    )
                }

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <LinkUpdater initialLink={this.state.homeLink} changeLink={this.onChangeLink}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));