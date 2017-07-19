import React from "react";

//get "connect" to connect react to the store
import {connect} from "react-redux"
//get bindactioncreators to bind "this" to the store (no more autobind)
import {bindActionCreators} from "redux";

//get all the actions and put them in an object called actionCreators
import * as actionCreators from "../actions/"

import Meme from "../components/meme";


class MemeContainer extends React.Component {
    render() {
        return (
            <div>
                <Meme url={this.props.url} top={this.props.top} bottom={this.props.bottom}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);