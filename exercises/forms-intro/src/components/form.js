import React from "react";

class Form extends React.Component {
    genNames() {
        this.namesList = this.props.names.map((item, index) => {
            return (
                <li key={item + index} onClick={() => {
                    this.props.handleRemove(index)
                }}>
                    {item}
                </li>
            )
        });
    }

    render() {
        this.genNames();
        return (
            <div name={this.props.formName}>
                <h1>{this.props.title}</h1>
                <input placeholder="Name" value={this.props.nameValue} onChange={this.props.handleInput}/>
                <button onClick={() => {
                    this.props.handleSubmit()
                }}>Submit
                </button>
                <ul>{this.namesList}</ul>
            </div>
        )
    }
}

export default Form;