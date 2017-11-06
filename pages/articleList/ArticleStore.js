// import React,{ Component } from 'react';
import {observable, action, useStrict} from 'mobx';
import ajax from '../../Config/Apis'; 
// useStrict(true);
class ArticleStore {
    @observable articleList = [];
    @observable pageIndex = 0;
    @observable pageSize = 10;
    @observable pageTotal = 0;
    @observable deleteData = null;
    // constructor() {
      
    // }
  
    @action  getArticleList(pageIndex) {
      // this.pageIndex = pageIndex;
      //发送摘苹果请求
    //   const token = window.localStorage.getItem('token');
      ajax({
          url: '/api/v1/article/list',
          method: 'POST',
          data:{
            pageIndex: pageIndex,
            pageSize: 10
          }
      }).then((response) => {
          this.pageIndex = pageIndex;
          this.articleList = response.data.data.list;
          this.pageTotal = response.data.data.pageTotal;
      })
      .catch((error) => {
        console.log("======");
        console.log(error);
      });
    }

    @action  getHomeArticleList(pageIndex,pageSize) {
        // this.pageIndex = pageIndex;
        //发送摘苹果请求
        const token = localStorage.getItem('token');
        ajax({
            url: '/api/v1/article/getList',
            method: 'POST',
            data:{
              token: token,
              pageIndex: pageIndex,
              pageSize: pageSize
            }
        }).then((response) => {
            this.pageIndex = pageIndex;
            this.articleList = response.data.data.list;
            this.pageTotal = response.data.data.pageTotal;
        })
        .catch((error) => {
           
        });
      }
  
    @action  deleteArticle(id) {
      // this.pageIndex = pageIndex;
      //发送摘苹果请求
      const token = localStorage.getItem('token');
      ajax({
          url: '/api/v1/article/deleteArticle',
          method: 'GET',
          data:{
            token: token,
            articleId:id
          }
      }).then((response) => {
          this.deleteData = response.data;
          console.log("-----")
          console.log(response.data);
          console.log("=====")
      })
      .catch((error) => {
        console.log("-----")
      });
    }
}

export default ArticleStore;