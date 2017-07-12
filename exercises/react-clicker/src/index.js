import React from "react";
import ReactDOM from "react-dom";

import "./index.css"

import ButtonContainer from "./containers/button-count"

class App extends React.Component {
    render() {
        return (
            <div>
                <ButtonContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));