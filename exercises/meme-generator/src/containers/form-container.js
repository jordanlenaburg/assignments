import React from "react";
import autoBind from "react-autobind"

//get connect to connect react to the store
import {connect} from "react-redux"
//get bindactioncreators to bind "this" to the store (no more autobind)
import {bindActionCreators} from "redux";

//get all the actions and put them in an object called actionCreators
import * as actionCreators from "../actions/"

import Form from "../components/form";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            top: "",
            bottom: "",
            url: ""
        };
        autoBind(this)
    }

    handleInput(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Form handleClick={this.props.makeMeme} handleInput={this.handleInput} info={this.state}/>
            </div>
        )
    }
}

//tell app how to connect state to component via props
const mapStateToProps = (state) => {
    return state;
};

//tell it how to turn actions into functions that can be called via props
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);