// import React,{ Component } from "react";
import ArticleStore from './ArticleStore';
import ArticleList from "./ArticleList"
const articleStore = new ArticleStore();
export default  () => (
    <ArticleList store={articleStore}/>
)