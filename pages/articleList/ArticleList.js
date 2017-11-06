import React,{ Component } from "react";
import MyLayout from '../../components/MyLayout.js'
// import 'antd/dist/antd.css';
import ArticleListScss from "styles/ArticleList.scss";
import Head from '../../components/Head'
import ArticleRow from "../../components/ArticleRow";
import { Collapse ,Menu,Icon,Button,Input,Tag,Spin,Switch} from 'antd';
const Panel = Collapse.Panel;
import Category from "../../components/Category";
import {observer} from 'mobx-react';
import {observable,autorun} from 'mobx';
// useStrict(true);
@observer
class ArticleList extends Component {
    constructor(props) {
		super(props);
        this.props.store.getArticleList(this.props.store.pageIndex)
        autorun(() => {
            console.log(this.props.store.articleList);
        });
	}
    state = {
        loading: false 
      };

    
    render() {
        
        return (
            <MyLayout>
                <Head />
                <style dangerouslySetInnerHTML={{ __html: ArticleListScss }} />
                <div className="ArticleList">
                    <div className="ArticleListBack">
                        <div className="ArticleListLeft">
                            {this.props.store.articleList.map((value,index,array) => { 
                                    return <div className="LeftBlock" key={index}><ArticleRow /></div>;
                                })
                            }
                            <div className="LeftBlock">
                                <Spin size="large" type="info" spinning={this.state.loading}> </Spin>
                                {/* Loading state：<Switch checked={this.state.loading} onChange={this.toggle} /> */}
                            </div>
                        </div>
                        <div className="ArticleListRight">
                            <Category />
                        </div>
                    </div>
                </div>
            </MyLayout>
        )
    }
}

export default ArticleList;