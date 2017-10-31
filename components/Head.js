import Link from 'next/link'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const Head = () => (
  <div>
    <Header className="header">
    <Link href="/" prefetch>
      <div className="logoBack">
        {/* <Link href="/next-page" prefetch>
          <img className="logo" src="./static/images/index/top.jpg" />
        </Link> */}
        
        <div className="headerTitle">
          Wang's Resume
        </div>
      </div>
      </Link>
    </Header>
  </div>
)

export default Head