import React from 'react';

import Styled from 'styled-components';


// JSX
const BaliseP80 = ({ children }) => 
    <Paragraphe>
      {children}
    </Paragraphe>


// Styled-components
// eslint-disable 
const Paragraphe = Styled.p`
  color: white;
  font-size: 80px;
`;
// eslint-enable


export default BaliseP80