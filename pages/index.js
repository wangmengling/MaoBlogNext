import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

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
import { DatePicker, message } from 'antd';
// import 'antd/dist/antd.css';
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
      <Layout>
        <div style={{ width: 400, margin: '100px auto' }} className="DatePic">
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }} className="DatePic">当前日期sss：{this.state.date.toString()}</div>
        </div>
      </Layout>
    );
  }
}

export default Index