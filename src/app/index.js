import React from "react";
import { render } from "react-dom";

import { Root } from "./components/Root";
import { People } from "./components/People";

class App extends React.Component {
    render() {
        return (
            <Root>
                <People></People>
            </Root>
        );
    }
}

render(<App />, window.document.getElementById("app"));