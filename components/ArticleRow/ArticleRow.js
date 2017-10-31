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

    blogListAction() {
        Router.push('/articleDetail')
    }

    render(){
        return (
            <div className="ArticleRowRoot">
                <style dangerouslySetInnerHTML={{ __html: ArticleRowScss }} />
                <div className="ArticleRowHeader">
                    <div className="ArticleRowHeaderCategory">
                        <Icon type="tag" /> React
                    </div>
                    <div className="ArticleRowHeaderTime">
                    <Icon type="schedule" /> 14/09/12
                    </div>
                    <div className="ArticleRowHeaderReadNum">
                    <Icon type="message" /> 5
                    </div>
                </div>
                <div className="ArticleRowTitle">
                    我的第一篇文章
                </div>
                <div className="ArticleRowContent">
                    <div className="ArticleRowContentImage">
                        
                    </div>
                    <div className="ArticleRowContentDescription">
                    当前市场参考价10元/TKC；
  输入数量后会根据集市的实时行情自动计算出最后的售出价格；
  您也可以到【集市】中自定义售出价格，等待交易；当前市场参考价10元/TKC；
  输入数量后会根据集市的实时行情自动计算出最后的售出价格；
  您也可以到【集市】中自定义售出价格，等待交易；当前市场参考价10元/TKC；
  输入数量后会根据集市的实时行情自动计算出最后的售出价格；
  您也可以到【集市】中自定义售出价格，等待交易；当前市场参考价10元/TKC；
  输入数量后会根据集市的实时行情自动计算出最后的售出价格；
  您也可以到【集市】中自定义售出价格，等待交易；当前市场参考价10元/TKC；
  输入数量后会根据集市的实时行情自动计算出最后的售出价格；
  您也可以到【集市】中自定义售出价格，等待交易；当前市场参考价10元/TKC；
  输入数量后会根据集市的实时行情自动计算出最后的售出价格；
  您也可以到【集市】中自定义售出价格，等待交易；
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