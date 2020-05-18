import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
`;

const layout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default layout;
