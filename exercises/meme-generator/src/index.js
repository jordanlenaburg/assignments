import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';
import './App.css';
import './Meme.css';
import './Form.css';

//get the thing that provides store to the app
import {Provider} from "react-redux";

//get the thing that makes the store
import {createStore} from "redux"

//get the reducer to handle the store
import reducers from "./reducers/"

//Components
import MemeContainer from "./containers/meme-container"
import FormContainer from "./containers/form-container"

//make the store
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Make A Meme</h1>
                <FormContainer/>
                <MemeContainer/>
            </div>
        );
    }
}

// give store to app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
