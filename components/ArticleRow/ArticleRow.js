import React,{ Component } from "react";
import ArticleRowScss from "styles/ArticleRow.scss";
class ArticleRow extends Component {
    render(){
        return (
            <div className="ArticleRowRoot">
                <style dangerouslySetInnerHTML={{ __html: ArticleRowScss }} />
                <div className="ArticleRowHeader">
                    <div className="ArticleRowHeaderCategory">
                        React
                    </div>
                    <div className="ArticleRowHeaderTime">
                        14/09/12
                    </div>
                    <div className="ArticleRowHeaderReadNum">
                        5
                    </div>
                </div>
                <div className="ArticleRowTitle">
                    No Run No
                </div>
                <div className="ArticleRowContent">
                    <div className="ArticleRowContentImage"></div>
                    <div className="ArticleRowContentDescription">

                    </div>
                </div>
            </div>
        )
    };
}

export default ArticleRow;