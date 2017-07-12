import React from "react";

import Site from "../components/site.js"

class SiteContainer extends React.Component {
    alertDesc (desc) {
        alert(`Description: ${desc}`)
    };

    render () {
    let sites = this.props.sites.map((item) => {

        return <Site key={item.name}
            handleMouseOver={this.alertDesc}
            image={item.image}
            name={item.name}
            desc={item.desc}
        />});

        return (
            <div>
                {sites}
            </div>
        )
    }
}

export default SiteContainer;