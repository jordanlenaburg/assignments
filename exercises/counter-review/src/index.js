import React from "react";
import ReactDom from "react-dom";

import CounterContainer from "./containers/counter-container";

class App extends React.Component {
    render() {
        return (
            <div>
                <CounterContainer/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.querySelector("#root"));