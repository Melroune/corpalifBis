import React, { ReactSelect } from 'react';

import Styled from 'styled-components';


// JSX
const BalisePBold24 = ({ children }) => 
    <Paragraphe>
      {children}
    </Paragraphe>


// Styled-components
// eslint-disable 
// const optionClassName = 'option';

// const Paragraphe = Styled(ReactSelect).attrs({
//   optionClassName,
// })`
//   .${optionClassName} {
//     color: blue;
//   }
// `

const Paragraphe = Styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
// eslint-enable


export default BalisePBold24