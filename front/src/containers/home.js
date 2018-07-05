import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { bindActionCreators } from "redux"
import styled from "styled-components"
import Header from "../components/Header"
import allTheActions from "../actions"

// const Header = styled.div`
//   background-color: ${props => props.theme.color.black};
//   height: 150px;
//   padding: 20px;
//   color: white;
// `

class App extends Component {
  componentDidMount() {
    this.props.actions.search.displaySearch("ace")
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="Container">
            <Header />
            <Link to="/login"> se connecter</Link>
            <Link to="/admin/articles">edition article</Link>
            <Link to="/news">yoloNews</Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.search.search
  }
}
const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(allTheActions.search, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
