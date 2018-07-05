import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import allTheActions from "../actions"
import queryString from "query-string"
import { log } from "util"
import { Route, Redirect, Switch } from "react-router"
import { Link } from "react-router-dom"

import ArticlesEdition from "../containers/articlesEdition"
const Title = styled.h4`
  margin: 0;
  padding: 10px;
  background-color: ${props => props.theme.color.grey};
`

const Edition = styled.div`
  flex: 1;
  display: flex;
`

const ListContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props =>
    props.isList ? props.theme.color.greenLight : props.theme.color.green};
  display: flex;
  justify-content: flex-start;
`

const ListCell = styled.div`
  text-align: center;
  height: inherit;
  flex: ${props => props.flex};
`

const ListText = styled.span`
  cursor: ${props => (props.pointer ? "pointer" : "")};
  line-height: 40px;
  padding: 0px 5px;
`

const isVisible = visible => (visible ? "OUI" : "NON")

const Visibility = styled.span`
  cursor: pointer;
  text-transform: uppercase;
  line-height: 40px;
  color: ${props => {
    return props.visible ? props.theme.color.green : props.theme.color.red
  }};
`

const ArticleList = (articles, editArticle, editVisibility) => {
  return articles.map((article, key) => {
    return (
      <ListContainer key={key} isList>
        <ListCell flex={7}>
          <ListText pointer> {article.titre}</ListText>
        </ListCell>
        <ListCell flex={1}>
          <Link to={`/admin/articles/edition/?id=${article.idarticles}`}>
            <ListText pointer>Logo</ListText>
          </Link>
        </ListCell>
        <ListCell flex={1}>
          <Visibility
            onClick={() => editVisibility(article.idarticles, article.visible)}
            visible={article.visible}
          >
            {isVisible(article.visible)}
          </Visibility>
        </ListCell>
      </ListContainer>
    )
  })
}

const ListHeader = () => (
  <ListContainer>
    <ListCell flex={7}>
      <ListText> TITRE </ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Editer </ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Visibilité</ListText>
    </ListCell>
  </ListContainer>
)

class List extends React.PureComponent {
  state = {
    Articles: [],
    Visible: null,
    subCategory: 0,
    redirect: false,
    editArticleState: []
  }
  componentDidMount() {
    axios.get(`http://localhost:3030/articles/getArticle/cat/1`).then(res => {
      this.setState({ Articles: res.data })
    })
  }

  getArticles(subCategory) {
    axios
      .get(`http://localhost:3030/articles/getArticle/cat/${subCategory}`)
      .then(res => {
        this.setState({ Articles: res.data })
        console.log("nextProps.subCategory", subCategory)
      })
  }

  componentWillReceiveProps(nextProps) {
    // console.log('------------',nextProps)
    if (this.state.subCategory !== nextProps.subCategory) {
      this.getArticles(nextProps.subCategory)
    }
  }

  editArticle = id => {
    console.log("editArticle", id)
    // <Redirect to={`/admin/articles/editArticle/?id=${article.idarticles}`} />
    // axios({
    //   method: "POST",
    //   url: `http://localhost:3030/articles/editArticle/${id}`,
    //   data: {
    //     id: id
    //   }
    // }).then(result => {
    //   // <Redirect push to={`/admin/articles/${result.data.result[0].idarticles}`} />;
    //   // console.log("result edit article  ", result.data.result[0])
    //   // console.log("result edit article id ", result.data.result[0].idarticles)
    //   this.setState({ redirect: true, editArticleState: result.data.result[0]})

    // })
  }
  // this.getArticles(this.props.subCategory)

  // push vers la route avec l'id en parametre

  editVisibility = (id, visible) => {
    axios({
      method: "POST",
      url: "http://localhost:3030/articles/enableArticle",
      data: {
        id: id,
        visible: visible
      }
    }).then(result => {
      this.getArticles(this.props.subCategory)
      // console.log("result =------=", result);
    })
    // this.setState({ this.vi })
    // console.log(id);
    // changer le OUI ou non apres appel a la base (l'objet retourner sera modifier)
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return (
        <Switch>
          <Redirect
            from="/admin/articles/"
            to={`/admin/profile/${this.state.editArticleState.idarticles}`}
          />
          <Route path="/admin/articles/:id" component={ArticlesEdition} />
        </Switch>
      )
    }
    // console.log("------ id articles ! ------", this.props);
    // this.mapgetListArticles(this.props.subCategory)
    // console.log("re-render List", this.props);
    // console.log("this.state.Articles :   ", this.state.Articles);
    console.log("RERENDER")
    return (
      <React.Fragment>
        <Title>EDITION ARTICLE </Title>
        <ListHeader />
        {ArticleList(
          this.state.Articles,
          this.editArticle,
          this.editVisibility
        )}
        <Edition />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    subCategory: state.category.subCategory
  }
}

export default connect(mapStateToProps)(List)
