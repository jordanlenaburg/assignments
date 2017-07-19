import React from "react";

class Meme extends React.Component {
    render() {
        return (
            <div className="meme-wrapper">
                <div className="Meme" style={{backgroundImage: `url(${this.props.url})`}}>
                    <div className="meme-text top-text">{this.props.top}</div>
                    <div className="meme-text bottom-text">{this.props.bottom}</div>
                </div>
            </div>
        )
    }
}

export default Meme;