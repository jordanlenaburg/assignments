import React from "react";
import autoBind from "react-autobind"

import Counter from "../components/counter";

class CounterContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            counter: 100,
            style: {
                color: "lawngreen"
            }
        }
    };

    up() {
        this.setState({
            counter: this.state.counter + 1,
            style: {
                ...this.state.style,
                color: "red"
            }
        })
    };

    down() {
        this.setState({
            counter: this.state.counter - 1,
            style: {
                ...this.state.style,
                color: "skyblue"
            }
        })
    }

    render() {
        return (
            <div>
                <Counter style={this.state.style} counter={this.state.counter} handleUp={this.up}
                         handleDown={this.down}/>
            </div>
        )
    }
}

export default CounterContainer