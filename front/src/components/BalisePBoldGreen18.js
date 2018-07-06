import React from "react"

import Styled from "styled-components"

// JSX
const BalisePBoldGreen18 = ({ children }) => <Paragraphe>{children}</Paragraphe>

// Styled-components
// eslint-disable
const Paragraphe = Styled.p`
  color: rgb(16, 73, 73);
  font-size: 18px;
  font-weight: bold;
`
// eslint-enable

export default BalisePBoldGreen18
