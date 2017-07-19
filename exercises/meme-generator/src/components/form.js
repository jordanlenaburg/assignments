import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div className="Form">
                <input onChange={(event) => {
                    this.props.handleInput("url", event)
                }} value={this.props.info.url} type="text" className="form-input" placeholder="Image URL"/>
                <input onChange={(event) => {
                    this.props.handleInput("top", event)
                }} value={this.props.info.top} type="text" className="form-input" placeholder="Top Text"/>
                <input onChange={(event) => {
                    this.props.handleInput("bottom", event)
                }} value={this.props.info.bottom} type="text" className="form-input" placeholder="Bottom Text"/>
                <button onClick={() => {
                    this.props.handleClick(this.props.info)
                }}>Make Meme
                </button>
            </div>
        )
    }
}

export default Form;