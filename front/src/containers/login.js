import React, { Component } from "react"
import styled from "styled-components"

import Header from '../components/Header.js'
import Formulaire from '../components/Formulaire.js'
import Footer from '../components/Footer.js'
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
      <React.Fragment>
        <Header />
        <Formulaire />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Login
