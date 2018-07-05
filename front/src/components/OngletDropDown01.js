import React from "react"
import OngletDropDownPrincipal from "./OngletDropDownPrincipal.js"
import OngletDropDownSecondaire from "./OngletDropDownSecondaire.js"

import Styled from "styled-components"

const mapDropDown = data =>
  data.map((data, key) => (
    <OngletDropDownSecondaire key={key} children={data.name} link={data.to} />
  ))

// JSX
const OngletDropDown01 = ({ onglet, name }) => {
  return (
    <ul>
      <div href="#CoordinationRegionale">
        <Div className="dropdown">
          <OngletDropDownPrincipal children={name} />
          <DivMenu
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            {mapDropDown(onglet)}
          </DivMenu>
        </Div>
      </div>
    </ul>
  )
}

// Styled-components
// eslint-disable
const DivMenu = Styled.div`
  border-radius: 0px;
`

const Div = Styled.div`
  font-weight: bold;
  color: white;
  text-decoration: none;

  transition: color 0.4s;

  ${Div}:hover {
    cursor: pointer;
    color: rgb(51, 116, 103);
    transition: color 0.4s;
  }
`
// eslint-enable

export default OngletDropDown01
