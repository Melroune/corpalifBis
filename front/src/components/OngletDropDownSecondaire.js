import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// JSX
const OngletDropDownSecondaire = ({ children, link }) => (
  <Link className="dropdown-item" to={link ? link : "/news"}>
    <p>{children}</p>
  </Link>
)

// Styled-components
// eslint-disable
const StyledLink = styled(Link)`
  padding: 0 5px;
  color: rgb(51, 116, 103);

  ${StyledLink}:hover {
    background-color: rgb(51, 116, 103);
  }
`
// eslint-enable

export default OngletDropDownSecondaire
