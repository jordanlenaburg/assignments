import React from "react";
import autoBind from "react-autobind";

import Button from "../components/button"

class ButtonContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            blue: 0,
            redWidth: 50,
            blueWidth: 50
        };
        autoBind(this);
    }

    handleClick(color) {
        if (this.state.red > 100 || this.state.blue > 100) {
            this.setState({
                red: 0,
                blue: 0,
                redWidth: 50,
                blueWidth: 50
            })
        }
        if (color === "red") {
            this.setState({
                ...this.state,
                red: this.state.red + 1,
                blue: this.state.blue - 1,
                redWidth: this.state.redWidth + .5,
                blueWidth: this.state.blueWidth - .5
            });
        } else {
            this.setState({
                ...this.state,
                red: this.state.red - 1,
                blue: this.state.blue + 1,
                redWidth: this.state.redWidth - .5,
                blueWidth: this.state.blueWidth + .5
            })
        }

    }

    render() {
        return (
            <view>
                <div className="title">
                    <h3>Red: {this.state.red}</h3>
                    <h3>Blue: {this.state.blue}</h3>
                    <div className="blue" style={{width: this.state.blueWidth + '%'}}></div>
                    <div className="red" style={{width: this.state.redWidth + '%'}}></div>
                    <Button handleClick={this.handleClick} color="red"/>
                    <Button handleClick={this.handleClick} color="blue"/>
                </div>
            </view>
        )
    }
}

export default ButtonContainer;