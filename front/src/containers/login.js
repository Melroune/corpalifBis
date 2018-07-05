import React, { Component } from "react"


import Header from '../components/Header.js'
import Formulaire from '../components/Formulaire.js'
import Footer from '../components/Footer.js'

// import styled from "styled-components"
import './App.css'



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

     // <React.Fragment>
      //  <Header />
     //   <Formulaire />
     //   <Footer />
   //   </React.Fragment>

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
