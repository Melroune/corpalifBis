import React from 'react';

import Styled from 'styled-components';


// JSX
const BalisePGreen18 = ({ children }) => 
    <Paragraphe>
      {children}
    </Paragraphe>


// Styled-components
// eslint-disable 
const Paragraphe = Styled.p`
  color: rgb(16, 73, 73);
  font-size: 18px;
`;
// eslint-enable


export default BalisePGreen18