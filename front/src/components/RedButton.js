import React from 'react';

import Styled from 'styled-components';
import { Link } from "react-router-dom"

// JSX
const RedButton = ({ children, ...rest }) => 
    <Link to="/login" > <Button {...rest}>
      {children}
    </Button></Link>


// Styled-components
// eslint-disable 
const Button = Styled.button`
  height: 30px;
  padding: 0 15px;
  color: white;
  font-weight: bold;
  background-color: rgb(204, 73, 73);
  border: none;

  transition: color 0.3s;
  transition: background-color 0.3s;

  ${Button}:hover {
    background-color: rgb(142, 32, 33);
    color: rgb(201, 201, 201);

    transition: color 0.4s;
    transition: background-color 0.4s;
  }
`;
// eslint-enable


export default RedButton