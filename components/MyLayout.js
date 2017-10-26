import Head from './Head'
import antdStyle from 'antd/dist/antd.css'
import fontawesomeStyle from 'font-awesome/css/font-awesome.css'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const layoutStyle = {
  margin: 0,
  padding: 0,
  border: '0px solid #DDD'
}

const MyLayout = (props) => (
  <Layout className="layout">
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
      <style dangerouslySetInnerHTML={{ __html: fontawesomeStyle }} />
    {/* <Head /> */}
    <Content style={{ padding: '0 0px' }}>
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
)

export default MyLayout