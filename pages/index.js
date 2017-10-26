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
                <div>
                  <div>移动端</div>
                  <div>
                      Ios，Android
                  </div>
                </div>
                  
                <div>
                <div>服务端</div>
                  <div>
                      Nodejs,PHP
                  </div>
                </div>
                <div>
                <div>前端</div>
                  <div>
                      React,Vue,CSS,HTML5
                  </div>
                </div>
                <div>
                  <div>人工智能</div>
                  <div>
                      Learning
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