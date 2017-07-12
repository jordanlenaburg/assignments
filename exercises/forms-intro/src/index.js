import React from "react";
import ReactDOM from "react-dom";

//containers
import FormContainer from "./containers/form-container"

class App extends React.Component {
    render() {
        return (
            <view>
                <FormContainer/>
            </view>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));