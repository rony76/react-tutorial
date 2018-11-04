import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router , Route} from "react-router-dom";

import { Root } from "./components/Root";
import { People } from "./components/People";
import { User } from "./components/User";


class App extends React.Component {
    render() {
        return (
            <Router>
                <Root>
                    <Route exact path='/' component={People} />
                    <Route path='/people' component={People} />
                    <Route path='/user/:userId' component={User} />
                </Root>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById("app"));