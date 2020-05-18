import React from 'react';
import styled from 'styled-components';

const PaginateWrapper = styled.ul`
  margin: 50px 0px 30px;
  display: flex;
  list-style: none;
  padding: 0px;
`;
const PaginateItem = styled.li`
  padding: 5px 10px;
  font-weight: 700;
  border: 1px solid black;
  background: ${({ selected }) => (selected ? '#000000' : '#ffffff')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#000000')};
  margin: 5px;
  cursor: pointer;
`;

const Paginate = ({ total = 0, selected = 1, onChange }) => {
  // github only limits the search to first 1000 search,
  const numberOfPages = Math.ceil(total / 100);
  return (
    <PaginateWrapper>
      {[...Array(numberOfPages)].map((_, index) => {
        return (
          <PaginateItem
            selected={selected === index + 1}
            key={index + 1}
            onClick={() => onChange(index + 1)}
          >
            {index + 1}
          </PaginateItem>
        );
      })}
    </PaginateWrapper>
  );
};

export default Paginate;
