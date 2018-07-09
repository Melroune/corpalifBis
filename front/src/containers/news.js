import React from "react"
import queryString from "query-string"
import { connect } from "react-redux"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"

import styled from "styled-components"
import "./App.css"

// const Header = styled.div`
//   background-color: ${props => props.theme.color.black};
//   height: 150px;
//   padding: 20px;
//   color: white;
// `

const NewsContainer = styled.div`
  display: flex;
  flex: 2;
  border: 4px solid ${props => props.theme.color.green};
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WidgetsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
`

const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  width: 90%;
  margin: auto;
`

const Separator = styled.div`
  width: 90%;
  background-color: ${props => props.theme.color.green};
  height: 1px;
`

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Title = styled.h3`
  color: ${props => props.theme.color.green};
  font-size: 40px;
  padding: 20px;
`

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${props =>
    props.titleAlign === 0 ? "flex-start" : "flex-end"};
`

const ArticleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const articlesMap = datas => {
  console.log("data ", datas)
  return datas.map((data, key) => {
    console.log(key % 2)
    return (
      <ArticleContainer key={key}>
        <TitleContainer titleAlign={key % 2}>
          <Title>{data.titre}</Title>
        </TitleContainer>
        <Content
          dangerouslySetInnerHTML={{
            __html: data.contenu
          }}
        />
        <Separator />
      </ArticleContainer>
    )
  })
}

const Box = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background-color: ${props =>
    props.light ? props.theme.color.green : props.theme.color.greenLight};
  margin-bottom: 20px;
  flex-direction: column;
`

const BoxHeader = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
`

const BoxTitle = styled.h4`
  color: ${props => props.theme.color.white};
  line-height: 50px;
`

const BoxContentText = styled.span`
  color: ${props => props.theme.color.white};
  padding: 20px;
`

const BoxContent = styled.div`
  padding: 20px;
`

class News extends React.Component {
  state = {
    news: []
  }

  fetchNews = () => {
    const parsed = queryString.parse(this.props.search)
    axios
      .get(
        `http://localhost:3030/articles/showArticle/cat/${
          parsed.id ? parsed.id : 2
        }`
      )
      .then(res => {
        const tabDataNews = res.data.map(e => e)
        console.log(tabDataNews)
        this.setState({ news: tabDataNews })
        //stocker dans state
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.fetchNews()
    }
  }

  componentDidMount() {
    this.fetchNews()
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="App">
          <div className="Container">
            <Header />
            <AllContainer>
              <NewsContainer>{articlesMap(this.state.news)}</NewsContainer>
              <WidgetsContainer>
                <Box>
                  <BoxHeader>
                    <BoxTitle> Liens utiles </BoxTitle>
                  </BoxHeader>
                  <BoxContent>
                    <BoxContentText>
                      Pour rédiger vos directives anticipées, télécharger le
                      formulaire de la SFAP : Cliquez-ici Sites d'information
                      sur les Soins palliatifs SFAP, Société Française
                      d'Accompagnement et de soins Palliatifs Soin Palliatif
                      CRDN, Centre National De Ressources Portail soins
                      palliatifs EAPC, European Association for Palliative Care
                    </BoxContentText>
                  </BoxContent>
                </Box>
                <Box light>
                  <BoxHeader>
                    <BoxTitle>Liens utiles</BoxTitle>
                  </BoxHeader>
                  <BoxContent>
                    <BoxContentText>
                      Pour rédiger vos directives anticipées, télécharger le
                      formulaire de la SFAP : Cliquez-ici Sites d'information
                      sur les Soins palliatifs SFAP, Société Française
                      d'Accompagnement et de soins Palliatifs Soin Palliatif
                      CRDN, Centre National De Ressources Portail soins
                      palliatifs EAPC, European Association for Palliative Care
                    </BoxContentText>
                  </BoxContent>
                </Box>
              </WidgetsContainer>
            </AllContainer>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash
})

export default connect(mapStateToProps)(News)
