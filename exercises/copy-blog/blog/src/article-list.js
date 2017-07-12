import React from "react";
import Article from "./article.js";

class ArticleList extends React.Component {
    alertText (desc) {
        alert(`This article is about ${desc}`)
    }
    changeColor (elem) {
        elem.style.backgroundColor = "hotpink";
    }
    render() {
        let articles = this.props.articles.map((item) => {
            return <Article handleDescription={this.alertText} handleColorChange={this.changeColor} name={item.name}  desc={item.desc} date={item.date}/>
        });
        return (
            <div className="container">
                {articles}
            </div>
        )
    }
}


export default ArticleList;