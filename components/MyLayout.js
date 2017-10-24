import Header from './Header'
import Head from 'next/head'
import antdStyle from 'antd/dist/antd.css'
import fontawesomeStyle from 'font-awesome/css/font-awesome.css'
import stylesheet from 'styles/index.scss'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
  <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
      <style dangerouslySetInnerHTML={{ __html: fontawesomeStyle }} />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout