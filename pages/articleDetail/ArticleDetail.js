import React,{ Component } from "react";
import MyLayout from '../../components/MyLayout.js'
import Category from "../../components/Category";
import ArticleDetailScss from "styles/ArticleDetail.scss";
import { Icon, Button} from "antd";
import Head from "../../components/Head";
class ArticleDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <MyLayout>
                <Head />
                <style dangerouslySetInnerHTML={{ __html: ArticleDetailScss }} />
                <div className="ArticleDetail">
                    <div className="ArticleDetailBack">
                        <div className="ArticleDetailLeft">
                            <div className="ArticleDetailTitle">
                                wodeceshi
                            </div>
                            <div className="ArticleDetailTags">
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
                            <div className="ArticleDetailContent">
                            最近新闻上 ICO 很火，出于好奇，我研究了一下 ICO，分享一下我的看法。
                            什么是 ICO
                            首先我们需要搞清楚 ICO 是什么。网上有一句很混蛋的话：「看懂 ICO 的都忙着挣钱去了」，好像这个事情多么难懂。但随后研究下来，我觉得 ICO 并不复杂。稍加分析，我们很容易就能理解它是什么。
                            我用 Google 查到了一个 ICO 的中文解释，我们先看看，稍后再分析一下：
                            ICO（全称 Initial Coin Offering，首次代币发行众筹）就是区块链界的 IPO，一般是指区块链相关的初创项目在 ICO 平台上发行该项目独有的加密代币（对应 IPO 中的股票），投资者则使用数字货币（如比特币、以太币）购买该项目的代币，实现募资。投资人手中持有的代币代表其持有的股权份额，随着项目成果落地，这些代币作为交易媒介和权益的价值也不断提升，并且可以转让。
                            好了，我们再来分析一下这个定义。
                            交易的计价货币及影响
                            在定义中， ICO 必须使用数字货币购买。这种设计其实是增加了代币价格波动的风险，因为很多数字货币（包括比特币）本身价格就不稳定。ICO 基于一个价格波动剧烈的货币之上，自然就会受到相关数字货币的波动影响。而如果以法定货币（比如人民币）来交易，明显可以避免这种风险。
                            那么为什么 ICO 要选择数字货币呢？我个人认为是为了规避各种金融机构的监管。在中国以及一些别的国家，如果将 ICO 视为股权众筹或者证券发行，理应有证监会监管；但是 ICO 募集的资金不是法币而是数字虚拟货币，数字货币又应该由央行监管。ICO 这样的规则使得在中国可以规避掉监管主体，所以才会滋生出各种非法集资的现象。
                            在规避监管主体的同时，ICO 也规避掉了相关的监管法规。股权众筹或者证券发行其实有大量的法律存在，比如国内有《中国证券投资基金法》，这使得大家在做事情的时候有规则可以依据。但是 ICO 这种机制使得它可以随意制定自己的规则。
                            </div>
                            <div className="ArticleDetailPage">
                                <div className="ArticleDetailPagePre">
                                    <Icon type="left" />Backward
                                </div>
                                <div className="ArticleDetailPageNext">
                                    Forward<Icon type="right" />
                                </div>
                            </div>
                        </div>
                        <div className="ArticleDetailRight">
                            <Category />
                        </div>
                    </div>
                </div>
            </MyLayout>
        )
    }
}

export default ArticleDetail;
