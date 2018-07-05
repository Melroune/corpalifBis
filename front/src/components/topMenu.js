import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../actions";

import StyledButton from "../components/Button.js";

const TopMenuDiv = styled.div`
  background-color: ${props => props.theme.color.grey};
  display: flex;
  flex: 1;
  width: 100;
`;

const LeftTopMenuDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const CategoryLabelList = styled.div`
  display: flex;
  flex: 1 1 1;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
`;

const SubCategoryLabelList = styled.div`
  display: flex;
  flex: 1 1 1;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
`;

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
`;

const RightTopMenuDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Category = styled.h4`
  margin: 0;
  padding: 10px;
`;

// const tabCategory = [
//   { name: "Sante", id: 1 },
//   { name: "Palliatif", id: 2 },
//   { name: "Oncologie", id: 3 }
// ];

// const tabSubCategory = [
//   { name: "Sante", id: 1, categoryId: 1 },
//   { name: "Palliatif", id: 2, categoryId: 3 },
//   { name: "Oncologie", id: 3, categoryId: 2 }
// ];

class TopMenu extends React.PureComponent {
  state = {
    selectedCategory: null,
    selectedSubCategory: null,
    subCategoryIsVisible: false,
    tabCategory: [],
    tabSubCategory: []
  };

  handleSubCategoryVisibility = isVisible => {
    // console.log(isVisible);
      this.setState({
        subCategoryIsVisible: isVisible ? true : false
      })  
  }

  handleCategoryClick = id => {
    // console.log(id);
    this.setState(
      {
        selectedCategory: this.state.selectedCategory === id ? null : id,
        selectedSubCategory: null
      },
      () => {
        this.handleSubCategoryVisibility(this.state.selectedCategory);
      }
    );
  };

  handleSubCategoryClick = id => {
    // console.log("wesh", this.props)
    this.setState(
      {
        selectedSubCategory: this.state.selectedSubCategory === id ? null : id
      },
      () => {
        this.props.actions.category.subCategoryDispatch(//dispatch whit react-redux
          this.state.selectedSubCategory
        )
      }
    )
  }

  componentDidMount() {
    // console.log("TopMenu", this.props)
    axios.get("http://localhost:3030/categories/getCat").then(res => {
      this.setState({ tabCategory: res.data.result })
      // console.log("this.state.tabCategory:", this.state.tabCategory)
    })
    axios.get("http://localhost:3030/categories/getSousCat").then(res => {
      this.setState({ tabSubCategory: res.data.result })
      // console.log("this.state.tabSubCategory:", this.state.tabSubCategory)
    })
  }
  
  render() {
    // console.log()
    // console.log("rerender TOpMenu", this.props);
    return (
      <TopMenuDiv>
        <LeftTopMenuDiv>
          <div>
            <Category>Catégories</Category>
          </div>
          <CategoryLabelList>
            {this.state.tabCategory.map((category, key) => (
              <Label
                onClick={() => this.handleCategoryClick(category.idCategories)}
                activated={
                  this.state.selectedCategory === category.idCategories
                }
                key={key}
              >
                {category.name}
              </Label>
            ))}
          </CategoryLabelList>
          <div>
            <Category>Sous-Catégories</Category>
          </div>
          <SubCategoryLabelList>
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
          </SubCategoryLabelList>
        </LeftTopMenuDiv>
        <RightTopMenuDiv>
          <Link to="/admin/articles/create">
            <StyledButton>Ajouter Article</StyledButton>
          </Link>
        </RightTopMenuDiv>
      </TopMenuDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    subCategory: state.category.subCategory
  };
};
const mapDispatchToProps = dispatch => ({
  actions: {
    category: bindActionCreators(allTheActions.category, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
