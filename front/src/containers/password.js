import React, { Component } from "react"
import queryString from "query-string"
import { connect } from "react-redux"

import Header from '../components/Header.js'
import PasswordForm from '../components/PasswordForm.js'
import Footer from '../components/Footer.js'

// import styled from "styled-components"
import './App.css'

class Password extends Component {
  state = {
    articles: null,
    token: null
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.search)
    console.log(`parsed`, parsed)
    this.setState({ token: parsed.token})
  }

  render() {
    console.log(`token`, this.state.token)
    if(this.state.token === null){
      return <p>Loading...</p>
    }
    return (
      <div className="App">
        <div className="Container">
          <React.Fragment>
            <Header />
            <PasswordForm token={this.state.token}/>
            <Footer />
          </React.Fragment>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash
})

export default connect(mapStateToProps)(Password)
