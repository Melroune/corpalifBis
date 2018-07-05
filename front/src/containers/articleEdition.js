import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"
import queryString from "query-string"
import { connect } from "react-redux"

import StyledButton from "../components/Button.js"

import { Editor } from "@tinymce/tinymce-react"

import './App.css'

const AllContainer = styled.div`
  display: flex;
  flex: 1;
`

const LeftContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`

const InputText = styled.span`
  text-transform: uppercase;
  padding-left: 20px;
  padding-top: 10px;
`

const TitleInput = styled.input`
  height: 30px;
  font-size: 26px;
  margin: 20px;
  border-radius: 8px;
  outline: none;
  border: 2px solid ${props => props.theme.color.green};
`

const RightContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.color.grey};
  flex-direction: column;
`

//refacto
const CategoryLabelList = styled.div`
  display: flex;
  flex: 1 1 1;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
`

const statusCategory = [{ id: "docteur" }, { id: "user" }, { id: "everyone" }]

const CategoryContainer = styled.div`
  padding-top: 10px;
`

//refacto
const Label = styled.div`
  cursor: pointer;
  height: 30px;
  padding: 5px;
  margin: 2px;
  color: ${props =>
    props.activated ? props.theme.color.white : props.theme.color.white};
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.activated ? props.theme.color.green : props.theme.color.greenLight};
`

class ArticleCreation extends Component {
  state = {
    selectedCategory: null,
    selectedSubCategory: null,
    selectedStatus: null,
    subCategoryIsVisible: false,
    publish: false,
    title: null,
    content: null,
    tabCategory: [],
    tabSubCategory: [],
    dataArticle: {}
  }

  //refacto
  handleCategoryClick = id => {
    this.setState(
      {
        selectedCategory: this.state.selectedCategory === id ? null : id,
        selectedSubCategory: null
      },
      () => {
        this.handleSubCategoryVisibility(this.state.selectedCategory)
      }
    )
  }

  handleStatusClick = id => {
    this.setState({
      selectedStatus: this.state.selectedStatus === id ? null : id
    })
  }

  //refacto
  handleSubCategoryClick = id => {
    this.setState({
      selectedSubCategory: this.state.selectedSubCategory === id ? null : id
    })
  }

  //refacto
  handleSubCategoryVisibility = isVisible => {
    this.setState({
      subCategoryIsVisible: isVisible ? true : false
    })
  }

  handlePublishClick = bool => {
    this.setState({
      publish: bool
    })
  }

  handleEditorChange = e => {
    // console.log("Content was updated:", e.target.getContent());
    this.setState({
      content: e.target.getContent()
    })
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  postArticleToDatabase = async () => {
    // console.log(this.state);
    const {
      selectedCategory,
      selectedSubCategory,
      selectedStatus,
      publish,
      title,
      content,
      dataArticle
    } = this.state
    console.log(dataArticle.idarticles)

    await axios({
      method: "PUT",
      url: "http://localhost:3030/articles/putArticle",
      data: {
        id: dataArticle.idarticles,
        titre: dataArticle.titre,
        contenu: content,
        cible_status: dataArticle.cible_status,
        date_create: "2005-04-8 2:00:00.000",
        visible: dataArticle.visible ? 1 : 0,
        sous_categoriesId: dataArticle.sous_categories_idsous_categories,
        users_idusers: 1
      }
    })
  }
  async componentDidMount() {
    const parsed = queryString.parse(this.props.search)
    // console.log("idParsed: ", parsed)
    // console.log("TopMenu", this.props);
    let res = await axios.get("http://localhost:3030/categories/getCat")
    this.setState({ tabCategory: res.data.result })

    res = await axios.get("http://localhost:3030/categories/getSousCat")
    this.setState({ tabSubCategory: res.data.result })

    res = await axios.get(
      `http://localhost:3030/articles/editArticle/${parsed.id ? parsed.id : 2}`
    )
    // console.log({ data: res.data.result[parsed.id - 1].cible_status })
    await this.setState({ dataArticle: res.data.result[parsed.id - 1] })
    // console.log({ yolo: this.state.dataArticle })
    await this.setState({
      selectedCategory: this.state.dataArticle.Categories_idCategories
    })
    await this.handleSubCategoryVisibility(this.state.selectedCategory)
    await this.setState({
      selectedSubCategory:
        res.data.result[parsed.id - 1].sous_categories_idsous_categories
    })
    await this.setState({
      selectedStatus: res.data.result[parsed.id - 1].cible_status
    })
  }

  onChange = event => {
    this.setState({
      dataArticle: {
        ...this.state.dataArticle,
        titre: event.target.value
      }
    })
  }
  render() {
    console.log("---dataArticle---: ", this.state.dataArticle.contenu)
    const contenu = this.state.dataArticle.contenu
    // dangerouslySetInnerHTML={{
    //     __html: this.state.news.map(e => e.contenu)
    return (
      <React.Fragment>
        <AllContainer>
          <LeftContainer>
            <InputText>Titre</InputText>
            <TitleInput
              value={
                this.state.dataArticle.titre ? this.state.dataArticle.titre : ""
              }
              onChange={e => this.onChange(e)}
            />

            <Editor
              initialValue={contenu}
              init={{
                plugins: "link image code",
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright | code"
              }}
              onChange={this.handleEditorChange}
            />
          </LeftContainer>
          <RightContainer>
            {/* Refacto*/}
            <CategoryContainer>
              <InputText>Categories</InputText>
              <CategoryLabelList>
                {this.state.tabCategory.map((category, key) => (
                  <Label
                    onClick={() =>
                      this.handleCategoryClick(category.idCategories)
                    }
                    activated={
                      this.state.selectedCategory === category.idCategories
                    }
                    key={key}
                  >
                    {category.name}
                  </Label>
                ))}
              </CategoryLabelList>
            </CategoryContainer>
            <InputText>Sous-Categories</InputText>
            {/* Refacto*/}
            <CategoryLabelList>
              {this.state.subCategoryIsVisible ? (
                this.state.tabSubCategory.map(
                  (subCategory, key) =>
                    this.state.selectedCategory ===
                    subCategory.Categories_idCategories ? (
                      <Label
                        onClick={() =>
                          this.handleSubCategoryClick(
                            subCategory.idsous_categories
                          )
                        }
                        activated={
                          this.state.selectedSubCategory ===
                          subCategory.idsous_categories
                        }
                        key={key}
                      >
                        {subCategory.name}
                      </Label>
                    ) : null
                )
              ) : (
                <span>Veuillez selectionner une catégorie</span>
              )}
              {/* {this.state.subCategoryIsVisible ? this.state.tabSubCategory.map((category, key) => (
                this.state.selectedCategory === category.idsous_categories ? 
                <Label onClick={() => this.handleSubCategoryClick(category.idsous_categories)} 
                activated={this.state.selectedSubCategory === category.idsous_categories} key={key}>
                        {category.name}
                      </Label> : null)) : <span>
                  Veuillez selectionner une catégorie
                </span>} */}
            </CategoryLabelList>
            <InputText>VISIBILITÉ</InputText>
            <CategoryLabelList>
              {statusCategory.map((category, key) => (
                <Label
                  onClick={() => this.handleStatusClick(category.id)}
                  activated={this.state.selectedStatus === category.id}
                  key={key}
                >
                  {category.id}
                </Label>
              ))}
            </CategoryLabelList>
            <InputText>PUBLIÉ</InputText>
            <CategoryLabelList>
              <Label
                onClick={() => this.handlePublishClick(true)}
                activated={this.state.publish}
              >
                OUI
              </Label>
              <Label
                onClick={() => this.handlePublishClick(false)}
                activated={!this.state.publish}
              >
                NON
              </Label>
            </CategoryLabelList>
            <InputText>ENVOYER ARTICLE</InputText>
            <CategoryLabelList>
              <StyledButton onClick={this.postArticleToDatabase}>
                VALIDER
              </StyledButton>
            </CategoryLabelList>
          </RightContainer>
        </AllContainer>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash
})
// export default ArticleCreation;
export default connect(mapStateToProps)(ArticleCreation)
