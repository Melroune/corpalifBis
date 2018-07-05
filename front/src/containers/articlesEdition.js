import React, { Component } from "react";

import TopMenu from "../components/topMenu";
import List from "../components/listArticle";

import './App.css'

class ArticleEdition extends Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <List />
      </React.Fragment>
    );
  }
}

export default ArticleEdition;
