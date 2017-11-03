/**
 * Created by kee on 15/10/21.
 */
import axios from 'axios';
// const host = 'HTTP://localhost:3000' ;

const host = 'http://localhost:3002' ;

export default function apis({ url, method, ...others }) {
  return axios({
    url: host + url,
    method: method,
    ...others
  });
}