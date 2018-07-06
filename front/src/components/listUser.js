import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const Title = styled.h4`
  margin: 0;
  padding: 10px;
  background-color: ${props => props.theme.color.grey};
`

const Edition = styled.div`
  flex: 1;
  display: flex;
`

const ListContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props =>
    props.isList ? props.theme.color.greenLight : props.theme.color.green};
  display: flex;
  justify-content: flex-start;
`

const ListCell = styled.div`
  text-align: center;
  height: inherit;
  flex: ${props => props.flex};
`

const ListText = styled.span`
  cursor: ${props => (props.pointer ? "pointer" : "")};
  line-height: 40px;
  padding: 0px 5px;
`

const isValidated = validated => (validated ? "OUI" : "NON")

const Visibility = styled.span`
  cursor: pointer;
  text-transform: uppercase;
  line-height: 40px;
  color: ${props => {
    return props.visible ? props.theme.color.green : props.theme.color.red
  }};
`

const FakeData = [
  {
    fristname: "Abdou",
    lastname: "Kerkeb",
    email: "kerkeb@gmail.com",
    service: "Chirurgical",
    fonction: "Docteur",
    tel_port: "0615998406"
  },
  {
    fristname: "Abdou21e12e12e21e21",
    lastname: "Kerkeb",
    email: "kerkeb@gmail.com",
    service: "Chirurgical",
    fonction: "Docteur",
    tel_port: "0615998406"
  },
  {
    fristname: "Abdou3",
    lastname: "Kerkeb",
    email: "kerkeb@gmail.com",
    service: "Chirurgical",
    fonction: "Docteur",
    tel_port: "0615998406"
  },
  {
    fristname: "Abdou4",
    lastname: "Kerkeb",
    email: "kerkeb@gmail.com",
    service: "Chirurgical",
    fonction: "Docteur",
    tel_port: "0615998406"
  }
]

const UserList = (users, validateUser) => {
  // if (users) {
  console.log("user", users)

  return users.map((user, key) => {
    return (
      <ListContainer key={key} isList>
        <ListCell flex={1}>
          <ListText> {user.lastname}</ListText>
        </ListCell>
        <ListCell flex={1}>
          <ListText> {user.fristname}</ListText>
        </ListCell>
        <ListCell flex={1}>
          <ListText> {user.email}</ListText>
        </ListCell>
        <ListCell flex={1}>
          <ListText> {user.service}</ListText>
        </ListCell>
        <ListCell flex={1}>
          <ListText> {user.fonction}</ListText>
        </ListCell>
        <ListCell flex={1}>
          <ListText> {user.tel_port}</ListText>
        </ListCell>
        <ListCell flex={1}>
          <Visibility
            validated={user.validated}
            onClick={() => validateUser(user.idusers)}
          >
            {isValidated(user.validated)}
          </Visibility>
        </ListCell>
      </ListContainer>
    )
  })
  // }
}

const ListHeader = () => (
  <ListContainer>
    <ListCell flex={1}>
      <ListText> Nom </ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Prénom</ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Email</ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Service</ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Fonction</ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Telephone</ListText>
    </ListCell>
    <ListCell flex={1}>
      <ListText> Validé</ListText>
    </ListCell>
  </ListContainer>
)

class ListUser extends React.PureComponent {
  state = {
    users: [],
    Visible: null,
    subCategory: 0,
    redirect: false,
    editArticleState: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3030/users/getUser`).then(res => {
      this.setState({ users: res.data })
    })
  }

  validateUser = id => {
    console.log(id)
    axios.put(`http://localhost:3030/users/validateUsers/${id}`).then(res => {
      axios.get(`http://localhost:3030/users/getUser`).then(res => {
        this.setState({ users: res.data })
      })
    })
  }

  render() {
    // console.log(this.state.users)
    return (
      <React.Fragment>
        <Title>LISTE UTILISATEUR</Title>
        <ListHeader />
        {/*{UserList(this.state.users, this.editArticle, this.validateUser)}*/}
        {UserList(this.state.users, this.validateUser)}
        <Edition />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    subCategory: state.category.subCategory
  }
}

export default connect(mapStateToProps)(ListUser)
