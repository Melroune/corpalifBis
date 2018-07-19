import React, { Component } from "react"


import Header from '../components/Header.js'
import PasswordForm from '../components/PasswordForm.js'
import Footer from '../components/Footer.js'

// import styled from "styled-components"
import './App.css'



// const Header = styled.div`
//   background-color: ${props => props.theme.color.black};
//   height: 150px;
//   padding: 20px;
//   color: white;
// `

class Password extends Component {
  state = {
    articles: null
  }

  componentDidMount() {}

  render() {
    return (

     // <React.Fragment>
      //  <Header />
     //   <Password />
     //   <Footer />
   //   </React.Fragment>

      <div className="App">
        <div className="Container">
          <React.Fragment>
            <Header />
            <PasswordForm />
            <Footer />
          </React.Fragment>
        </div>
      </div>

    )
  }
}

export default Password
