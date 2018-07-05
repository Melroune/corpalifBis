import React, { Component } from "react"

// import styled from "styled-components"
import './App.css'

import Header from "../components/Header";
import Formulaire from "../components/Formulaire";
import Footer from "../components/Footer";

// const Header = styled.div`
//   background-color: ${props => props.theme.color.black};
//   height: 150px;
//   padding: 20px;
//   color: white;
// `

class Login extends Component {
  state = {
    articles: null
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div className="Container">
          <React.Fragment>
            <Header />
            <Formulaire />
            <Footer />
          </React.Fragment>
        </div>
      </div>
    )
  }
}

export default Login
