import React,{ Component } from "react";
import Link from 'next/link'
import ArticleRowScss from "styles/ArticleRow.scss";
import { Button, Icon } from 'antd';
import Router from 'next/router'
class ArticleRow extends Component {

    constructor(props){
        super(props)
        this.blogListAction = this.blogListAction.bind(this);
    }

    componentWillMount(){
    }

    blogListAction() {
        Router.push('/articleDetail')
    }

    render(){
        let date = new Date();
        date.setTime(this.props.article.time);
        return (
            <div className="ArticleRowRoot">
                <style dangerouslySetInnerHTML={{ __html: ArticleRowScss }} />
                <div className="ArticleRowHeader">
                    <div className="ArticleRowHeaderCategory">
                        <Icon type="tag" /> {this.props.article.category}
                    </div>
                    <div className="ArticleRowHeaderTime">
                    <Icon type="schedule" /> &nbsp;
                    {date.toLocaleDateString()}
                    </div>
                    <div className="ArticleRowHeaderReadNum">
                    <Icon type="message" /> {this.props.article.view}
                    </div>
                </div>
                <div className="ArticleRowTitle">
                    {this.props.article.title}
                </div>
                <div className="ArticleRowContent">
                    <div className="ArticleRowContentImage">
                        
                    </div>
                    <div className="ArticleRowContentDescription">
                        {this.props.article.summary}
                    </div>
                </div>
                <div className="ArticleRowMoreButton">
                    <Button type="primary" onClick={this.blogListAction}>
                        详情<Icon type="right" />
                    </Button>
                </div>
            </div>
        )
    };
}

export default ArticleRow;