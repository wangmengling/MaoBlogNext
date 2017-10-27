import MyLayout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Breadcrumb} from 'antd'
// import  "./index.scss"

// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} 
//             href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Button, Icon } from 'antd';
// import 'antd/dist/antd.css';
import indexScss from "styles/index.scss";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <MyLayout>
        <style dangerouslySetInnerHTML={{ __html: indexScss }} />
        <div style={{ background: '#fff', padding: 0, minHeight: 880 }} className="AllContent">
          <div className="ResumeContent">
              <div className="RightIcon">
                {/* <Icon type="bars" /> */}
                <Button icon="bars" />
              </div>
              <div className="HeaderIcon">
                 <img src="./static/images/index/top.jpg" />
              </div>
              <div className="FullStackEngineer">
                Full Stack Engineer
              </div>
              <div className="Motto">
              The Harder The More Fortunate
              </div>
              <div>
              <Button type="primary" icon="download" size="default" className="DownLoadButton">Download My Resume</Button>
              </div>
          </div>
          <div className="MySkills"> 
            <div className="Title">
              MY SKILLS
            </div>
            <div className="Line">
              <div className="LineLeft"></div>
              <Icon type="tool" className="LineIcon" />
              <div className="LineRight"></div>
            </div>
            <div className="SkillCategory">
                <div className="CategoryBlock">
                  <div className="Title">移动端</div>
                  <div className="Language">
                    <div className="LanguageCategory">
                      <div className="LanguageTitle">IOS</div>
                      <div className="LanguageDetail">5年IOS开发经验，熟悉Swift，Objective-C语言开发</div>
                    </div>
                    <div className="LanguageCategory"><div className="LanguageTitle">Android</div><div className="LanguageDetail">Learning</div></div>
                    <div className="LanguageCategory"><div className="LanguageTitle">RN</div><div className="LanguageDetail">对ReactNative开发移动端有一定经验</div></div>
                  </div>
                </div>
                  
                <div className="CategoryBlock">
                <div className="Title">服务端</div>
                  <div  className="Language">
                    <div className="LanguageCategory"><div className="LanguageTitle">Nodejs</div><div className="LanguageDetail">熟悉Express，Koa等框架</div></div>
                    <div className="LanguageCategory"><div className="LanguageTitle">PHP</div><div className="LanguageDetail">3年PHP开发经验（已弃坑）</div></div>
                  </div>
                </div>
                <div className="CategoryBlock">
                <div className="Title">前端</div>
                  <div  className="Language">
                    <div className="LanguageCategory"><div className="LanguageTitle">React</div><div className="LanguageDetail">熟悉Mobx架构</div></div>
                    <div className="LanguageCategory"><div className="LanguageTitle">Vue</div><div className="LanguageDetail">Learning</div></div>
                    <div className="LanguageCategory"><div className="LanguageTitle">CSS</div><div className="LanguageDetail">1：熟悉CSS3 2:熟悉CSS框架 bluma ，antd</div></div>
                    {/* <div className="LanguageCategory"><div className="LanguageTitle">HTML5</div><div className="LanguageDetail">HTML5</div></div> */}
                    
                  </div>
                </div>
                <div className="CategoryBlock">
                  <div className="Title">人工智能</div>
                  <div  className="Language">
                    <div  className="LanguageCategory"><div className="LanguageTitle">Python</div><div className="LanguageDetail">Learning</div></div>
                  </div>
                </div>
            </div>
          </div>
          <div className="ContactMe">
            <div className="Title">
              My Contact Way
            </div>
            <div className="Line">
              <div className="LineLeft"></div>
              <Icon type="message" className="LineIcon" />
              <div className="LineRight"></div>
            </div>

            <div className="ContactMeWay">
                <div className="ContactMeBlock">
                  <div><Icon type="environment-o" className="ContactMeIcon" /></div>
                  <div className="ContactMeTitle">ADDRESS</div>
                  <div  className="ContactMeLine">
                  </div>
                  <div  className="ContactMeDetail">
                    四川省-成都市-高新区-天府三街
                  </div>
                </div>
                <div className="ContactMeBlock">
                  <div><Icon type="mobile" className="ContactMeIcon" /></div>
                  <div className="ContactMeTitle">PHONE</div>
                  <div  className="ContactMeLine">
                  </div>
                  <div  className="ContactMeDetail">
                    15828581089
                  </div>
                </div>
                <div className="ContactMeBlock">
                  <div><Icon type="mail" className="ContactMeIcon" /></div>
                  <div className="ContactMeTitle">EMAIL</div>
                  <div  className="ContactMeLine">
                  </div>
                  <div  className="ContactMeDetail">
                    294025529@qq.com
                  </div>
                </div>
            </div>
          </div>
        </div>
      </MyLayout>
    );
  }
}

export default Index