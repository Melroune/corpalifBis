import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import styled from "styled-components";
import './App.css'

import BaliseH1 from './../components/BaliseH1.js';
import BalisePBold24 from './../components/BalisePBold24.js';
import Header from './../components/Header.js'; 
import AnnuaireEnEntier from './../components/AnnuaireEnEntier.js';
import Article01 from './../components/Article01.js';
import Article02 from './../components/Article02.js';
import RendezVous from './../components/RendezVous.js';
import Footer from './../components/Footer.js';
import RedButtonDiv from './../components/RedButtonDiv.js';
import allTheActions from "../actions";

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
            {/* <Link to="/login"> se connecter</Link>
            <Link to="/admin/articles">edition article</Link>
            <Link to="/news">yoloNews</Link> */}
            <AnnuaireEnEntier />
            <Article01 />

            {/* Slider, à modifier avec sagesse !!! */}
            <article>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-block w-100 ImageJustice" alt="First slide">
                      <div className="row">
                        <div className="App-CorpalifInformation FondGris">
                          <div className="CorpalifInformation">

                            <div>
                              <BaliseH1 children="Les soins palliatifs" />
                            </div>
                            
                            <div className="CorpalifInformationCentrer">
                              <div className="DivFlollante">

                                <BalisePBold24>
                                  Les soins palliatifs sont des soins actifs délivrés dans une approche globale de la personne 
                                atteinte d'une maladie grave, évolutive ou terminale.
                                </BalisePBold24>
                                <br />
                                <BalisePBold24>
                                  Ces soins, délivrés par une équipe pluridisciplinaire, ont pour objectif la qualité de vie du patient et l'accompagnement de ses 
                                proches, qu'il soit à domicile ou en institution.
                                </BalisePBold24>

                              </div>
                            </div>

                            <div>
                              <RedButtonDiv alt="Onglet: Les soins palliatifs => La démarche palliative" children="La démarche palliative"></RedButtonDiv>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="d-block w-100 ImageHopital" alt="First slide">
                      <div className="row">
                        <div className="App-CorpalifInformation FondGris">
                          <div className="CorpalifInformation">
                            <BaliseH1 children="Actualités" />
                            <div className="CorpalifInformationCentrer">
                              <div className="DivFlollante">

                                <br />
                                <BalisePBold24>
                                  Retrouvez les actualités nationales et régionales<br />
                                </BalisePBold24>
                                <br />

                              </div>
                            </div>
                            <RedButtonDiv alt="Onglet: Veille médicale => Actualités nationales et régionales" children="Actualités"></RedButtonDiv>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="d-block w-100 ImageAnciens" alt="First slide">
                      <div className="row">
                        <div className="App-CorpalifInformation FondGris">
                          <div className="CorpalifInformation">
                            <BaliseH1 children="Nos rencontres" />
                            <div className="CorpalifInformationCentrer">
                              <div className="DivFlollante">

                                <br />
                                <BalisePBold24>
                                  Les rencontres de la CORPALIF : échanges, partage, diffusion.
                                </BalisePBold24> 
                                <br />
                                <BalisePBold24>
                                  Retrouvez les dates des après-midi thématiques et de la journée régionale des acteurs de soins palliatifs<br />
                                </BalisePBold24>

                              </div>
                            </div>
                            <RedButtonDiv alt="Onglet: Veille médicale => Nos rencontres" children="Nos rencontres"></RedButtonDiv>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </article>      
            {/* <Carrousel /> */}
            <Article02 /> 
            <RendezVous /> 
            <Footer />

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
