import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #cccccc;
  outline: 0;
  font-size: 16px;
  color: black;
  padding: 7px 0;
  background: transparent;
  width: 600px;
  padding: 5px;
`;

const search = (props) => {
  return <Input {...props} />;
};

export default search;
