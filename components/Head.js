import Link from 'next/link'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const Head = () => (
  <div>
    <Header>
    <div className="logo" />
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' ,alignContent:'right'}}
    >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
  </div>
)

export default Head