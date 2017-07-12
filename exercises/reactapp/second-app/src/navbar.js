import React from "react";

class Navbar extends React.Component {
    render() {
        let links = this.props.links.map((item) => {
            return (
                <li key={item.text}>
                    <a href={item.href}>
                        {item.text}
                    </a>
                </li>
            )
        });
        return (
            <nav className="navbar-inverse">
                <div className="navbar-header">
                    <a className="navbar-brand">{this.props.brand}</a>
                </div>
                <ul className="nav nav-justified">
                    {links}
                </ul>
            </nav>
        )
    }
}

export default Navbar