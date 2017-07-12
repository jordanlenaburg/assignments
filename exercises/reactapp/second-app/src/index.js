import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Imported components
import Footer from "./footer"
import Navbar from "./navbar"
import Content from "./content"

class App extends React.Component {
    render() {
        return (
            <div className="content">
                <Navbar brand="Awesome brand here" links={[
                    {
                        text: "Home",
                        href: "home"
                    },
                    {
                        text: "Awesome Link",
                        href: "awesome"
                    },
                    {
                        text: "Better Link",
                        href: "better"
                    },
                    {
                        text: "Things and Stuff",
                        href: "tns"
                    },
                    {
                        text: "Stuff and Things",
                        href: "snt"
                    }
                ]}/>
                <Content>
                    <div className="jumbotron">
                        <h1>Hello World</h1>
                        <p>This is a paragraph</p>
                    </div>
                </Content>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));