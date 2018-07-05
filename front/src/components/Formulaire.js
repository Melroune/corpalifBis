import React from 'react';

import Styled from 'styled-components';

import BaliseH1Form from './BaliseH1Form.js';
// import BaliseH2 from './BaliseH2.js';
// import BalisePBold from './BalisePBold.js';
// import BaliseP from './BaliseP.js';
// import RedButtonDiv from './RedButtonDiv.js';


// JSX
class Formulaire extends React.Component {
  state = {
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    ville: '',
    codePostale: '',
    telFixe: '',
    telMobile: '',
    structure: '',
    service: '',
    fonction: ''
  }

  handleChange = event => {

    console.log('state', this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  HandleSubmit = (event, req, res) => {
    // event.preventDefault()
    const user = {
      civilite: this.state.civilite,
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      adresse: this.state.adresse,
      ville: this.state.ville,
      codePostale: this.state.codePostale,
      telFixe: this.state.telFixe,
      telMobile: this.state.telMobile,
      structure: this.state.structure,
      service: this.state.service,
      fonction: this.state.fonction
    }
    fetch(`http://localhost:3030/auth/Register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
        
      }).then(response => {
        response.json()
        })
  }

  render(){
    return (
  <article>
    <div className="row">
    <DivInformation>
          <BaliseH1Form children="S'identifier" />
          <DivCentrer>
            <DivFloat>
              <Form>
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
                    <Input type="password" className="form-control" id="password" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <Button type="submit"  className="col-2">Valider</Button>
                </DivRow>
              </Form>

            </DivFloat>
          </DivCentrer>
      </DivInformation>
      <DivInformation>
          <BaliseH1Form children="Nous rejoindre" />
          <DivCentrer>
            <DivFloat>
              <Form onSubmit={this.HandleSubmit}>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputCivilite">Civilité</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Select name="civilite" className="form-control" onChange={this.handleChange}>
                      <option defaultValue onChange={this.handleChange}>Docteur</option>
                      <option onChange={this.handleChange}>Professeur</option>
                      <option onChange={this.handleChange}>Mademoiselle</option>
                      <option onChange={this.handleChange}>Madame</option>
                      <option onChange={this.handleChange}>Monsieur</option>
                    </Select>
                  </div>
                  </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputNom">Nom</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" name="nom" className="form-control" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputPrenom">Prénom</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" name="prenom" className="form-control" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputEmail">Email</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="email" className="form-control" name="email" onChange={this.handleChange} />
                  </div>
                </DivRow>
                {/* <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputPassword">Password</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="password" className="form-control" id="password" />
                  </div>
                </DivRow> */}
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputAdresse">Adresse</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="adresse" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputVille">Ville</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="ville" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputCodePostale">Code Postale</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="codePostale" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputTelephoneFixe">Téléphone Fixe</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="telFixe" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputTelephoneMobile">Téléphone Mobile</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="telMobile" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputStructure">Structure</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="structure" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputService">Service</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="service" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputFonction">Fonction</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" name="fonction" onChange={this.handleChange} />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <Button type="submit"  className="col-2">Valider</Button>
                </DivRow>
              </Form>

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


export default Formulaire