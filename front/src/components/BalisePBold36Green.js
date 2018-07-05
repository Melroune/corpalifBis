import React from 'react';

import Styled from 'styled-components';


// JSX
const BalisePBold36Green = ({ children }) => 
    <Paragraphe>
      {children}
    </Paragraphe>


// Styled-components
// eslint-disable 
const Paragraphe = Styled.p`
  color: rgb(16, 73, 73);
  font-size: 36px;
  font-weight: bold;

  margin-top: -55px;
`;
// eslint-enable


export default BalisePBold36Green