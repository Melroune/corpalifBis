import React from 'react';
import Styled from 'styled-components';
import BaliseH1Form from './BaliseH1Form.js';
import queryString from "query-string"
import { connect } from "react-redux"
import axios from "axios"
import { Redirect } from 'react-router'
// import BaliseH2 from './BaliseH2.js';
// import BalisePBold from './BalisePBold.js';
// import BaliseP from './BaliseP.js';
// import RedButtonDiv from './RedButtonDiv.js';


// JSX

// const params = new URLSearchParams(window.location.search)
// const id = params.get('id')
// console.log(params)

// console.log(id)
class PasswordForm extends React.Component {
  state = {
    email: '',
    password: '',
    token: null,
    fireRedirect: false
  }

  componentDidMount() {
    console.log(`Props recus`,this.props)
    this.setState({token: this.props.token})
  }
  handleChange = event => {

    console.log('state', this.state)
    // console.log(this.props.params.id)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  HandleSubmit = (event, req, res) => {
    console.log('submit ok')
     //event.preventDefault()
    // const token = queryString.parse(this.props.search)
    this.setState({ fireRedirect: true })

    const user = {
      email: this.state.email,
      password: this.state.password,
      token: this.state.token
    }
    console.log(user)

    axios.put(`http://localhost:3030/users/createPassword`, {
      user
      }).then(response => {
          console.log(response);
          
        })

    // axios
    //   .put(
    //     `http://localhost:3030/users/createPassword`, {
    //       email: 'email'
    //     }
    //   )
  }

  render(){
    console.log('yolo its me', this.state.token)
    const { fireRedirect } = this.state

    return (
  <article>

    <div className="row">
      <DivInformation>
          <BaliseH1Form children="Créer votre mot de passe" />
          <DivCentrer>
            <DivFloat>
              <Form onSubmit={this.HandleSubmit}>

                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputEmail">Email</Label>
                  </DivLabel>
                  <div className="col-5">

                    <Input type="email" className="form-control" name="email" onChange={this.handleChange} />
                  </div>
                </DivRow>
                
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputPassword">Mot de passe</Label>
                  </DivLabel>
                  <div className="col-5">

                    <Input type="password" className="form-control" name="password" onChange={this.handleChange} />
                  </div>
                </DivRow>

                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputPassword">Mot de passe</Label>
                  </DivLabel>
                  <div className="col-5">

                    <Input type="password" className="form-control" id="password" />
                  </div>
                </DivRow>

                
                
                <DivRow className="row justify-content-center">
                  <Button type="submit"  className="col-2">Valider</Button>
                </DivRow>
              </Form>
              {fireRedirect && (
              <Redirect to={'/login'}/>
        )}

            </DivFloat>
          </DivCentrer>
      </DivInformation>
    </div>
  </article>

    )}
}

// Styled-components
// eslint-disable 
const DivRow = Styled.div`
  margin: 20px;
`;

const DivLabel = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 38px;
  padding: 0 10px;
  // border: 2px solid black;
  background-color: rgb(16, 73, 73);
`;

const Label = Styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const Input = Styled.input`
height: 38px;
  padding: 0 10px;
  border: 1px solid lightgrey;
  border-radius: 0;
`;

const Select = Styled.select`
  height: 38px;
  padding: 0 5px;
  border: 1px solid lightgrey;
  border-radius: 0;
`;

const Button = Styled.button`
  height: 38px;
  padding: 0 5px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(16, 73, 73);
`;

const Form = Styled.form`
  width: 800px;
  background: white;
  border: 5px solid rgb(16, 73, 73);
`;

const DivInformation = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  color: white;
  // background-color: rgb(16, 73, 73);
`;

const DivCentrer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px;
`;

const DivFloat = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;
// eslint-enable


export default PasswordForm