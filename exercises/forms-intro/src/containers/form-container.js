import React from "react";
import Form from "../components/form"
import autoBind from "react-autobind"

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
            nameValue: ""
        };
        autoBind(this)
    };

    handleSubmit() {
        this.setState({
            ...this.state,
            names: [...this.state.names, this.state.nameValue],
            nameValue: ""
        });
    };

    handleInput(event) {
        this.setState({
            ...this.state,
            nameValue: event.target.value
        })
    };

    handleRemove(index) {
        let oldNames = [...this.state.names];
        oldNames.splice(index, 1);
        this.setState({
            ...this.state,
            names: oldNames
        })
    };

    render() {
        return (
            <div>
                <Form title="List of Names" nameValue={this.state.nameValue} handleRemove={this.handleRemove} handleSubmit={this.handleSubmit}
                      handleInput={this.handleInput} formName="list" names={this.state.names}/>
            </div>
        )
    }
}

export default FormContainer;