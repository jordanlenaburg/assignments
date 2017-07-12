import React from "react";

//imported components
import Footer from "./footer"
import Navbar from "./navbar"

class Container extends React.Component {
    render() {
        return (
            <section className="content">
                <Navbar/>
                <div className="jumbotron">
                    <h1>Hello World</h1>
                    <p>This is a paragraph</p>
                </div>
                <Footer/>
            </section>
        )
    }
}

export default Container