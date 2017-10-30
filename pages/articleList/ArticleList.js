import React,{ Component } from "react";
import MyLayout from '../../components/MyLayout.js'
// import 'antd/dist/antd.css';
import ArticleListScss from "styles/ArticleList.scss";
import Head from '../../components/Head'
import ArticleRow from "../../components/ArticleRow";
import { Collapse ,Menu,Icon} from 'antd';
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
class ArticleList extends Component {
    
    render() {
        return (
            <MyLayout>
                <Head />
                <style dangerouslySetInnerHTML={{ __html: ArticleListScss }} />
                <div className="ArticleList">
                    <div className="ArticleListBack">
                        <div className="ArticleListLeft">
                            <div className="LeftBlock">
                                <ArticleRow />
                            </div>
                            <div className="LeftBlock">
                                <ArticleRow />
                            </div>
                            <div className="LeftBlock">
                                <ArticleRow />
                            </div>
                            <div className="LeftBlock">
                                <ArticleRow />
                            </div>
                        </div>
                        <div className="ArticleListRight">
                            <div className="RightCategory">
                            <Menu theme="dark" mode='inline' defaultSelectedKeys={['6']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
            >
              <Menu.Item key="1">Tom</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">File</span>
              </span>
            </Menu.Item>
          </Menu>
                            </div>
                            <div className="RightArchive">

                            </div>
                        </div>
                    </div>
                </div>
            </MyLayout>
        )
    }
}

export default ArticleList;