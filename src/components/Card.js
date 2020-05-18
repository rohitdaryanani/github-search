import React from 'react';
import styled from 'styled-components';

const Card = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f8f9fa !important;
  overflow: hidden;
  margin: 10px;
  padding: 0;
  max-width: 180px;
  width: 100%;
`;

const CardItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  font-weight: ${({ strong }) => (strong ? '500' : '300')};
`;

const card = ({ repo }) => {
  const { id = '', name = '', watchers_count = 0, stargazers_count = 0 } = repo;
  return (
    <Card key={id}>
      <CardItem>{`ID: ${id}`}</CardItem>
      <CardItem strong>{name}</CardItem>
      <CardItem>{watchers_count}</CardItem>
      <CardItem>{stargazers_count}</CardItem>
    </Card>
  );
};

export default card;
