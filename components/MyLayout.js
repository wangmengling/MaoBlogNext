import Head from './Head'
import antdStyle from 'antd/dist/antd.css'
import fontawesomeStyle from 'font-awesome/css/font-awesome.css'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import Router from 'next/router'
import React,{ Component } from "react";
const layoutStyle = {
  margin: 0,
  padding: 0,
  border: '0px solid #DDD'
}
// const mockedRouter = { push: () => {} }
// Router.router = mockedRouter
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

// let headerView = null
// if (Router.pathname != "/") {
//   headerView = <Head />;
// }else {
//   headerView = null;
// }
// const MyLayout = (props) => (
//   <Layout className="layout">
//       <meta charSet='utf-8' />
//       <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//       <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
//       <style dangerouslySetInnerHTML={{ __html: fontawesomeStyle }} />
//       {Router.pathname != "/"  &&
//         <Head />
//       } 
//     <Content style={{ padding: '0 0px' }}>
//       {props.children}
//     </Content>
//     <Footer style={{ textAlign: 'center' }}>
//       Ant Design ©2016 Created by Ant UED
//     </Footer>
//   </Layout>
// )

class MyLayout extends Component {
  
  render() {
    let headerView = <div></div>;
    if (Router.pathname == "/") {
      headerView = <div></div>;
    }else {
      headerView = <Head />;
    }
    console.log(Router.pathname+"da");
    return (
      <div>
      <Layout className="layout">
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
          <style dangerouslySetInnerHTML={{ __html: fontawesomeStyle }} />
        <Content style={{ padding: '0 0px' }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED 
        </Footer>
      </Layout>
      </div>
    )
  };
}

export default MyLayout