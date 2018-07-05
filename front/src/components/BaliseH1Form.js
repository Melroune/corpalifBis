import React from 'react';

import Styled from 'styled-components';


// JSX
const BaliseH1Form = ({ children }) => 
    <Title01>
      {children}
    </Title01>


// Styled-components
// eslint-disable 
const Title01 = Styled.h1`
  display: flex;
  justify-content: center;

  color: rgb(16, 73, 73);
  font-size: 56px;
  font-weight: bold;
`;
// eslint-enable


export default BaliseH1Form