import React from 'react';

import Styled from 'styled-components';


// JSX
const BaliseP120Green = ({ children }) => 
    <Paragraphe>
      {children}
    </Paragraphe>


// Styled-components
// eslint-disable 
const Paragraphe = Styled.p`
  color: rgb(16, 73, 73);
  font-size: 120px;

  margin-top: -44px;
`;
// eslint-enable


export default BaliseP120Green