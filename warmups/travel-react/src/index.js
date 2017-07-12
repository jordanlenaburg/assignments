import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SiteContainer from "./containers/site-container.js";

let mySites = [
    {
        name: "Hawaii",
        image: "/images/hawaii.jpg",
        desc: "Paradise"
    },
    {
        name: "Athens",
        image: "/images/athens.jpg",
        desc: "The sparkling city"
    },
    {
        name: "Caribbean",
        image: "/images/caribbean.jpg",
        desc: "Warmth and beauty"
    }
];

class App extends React.Component {
    render() {
        return ( <
            div >
            <
            SiteContainer sites = {
                mySites
            }
            /> <
            /div>
        )
    }
}

ReactDOM.render( < App / > , document.querySelector("#root"));
