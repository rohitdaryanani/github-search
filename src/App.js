import React from 'react';
import styled from 'styled-components';

import Search from './components/Search';
import Card from './components/Card';
import Layout from './components/Layout';
import Pages from './components/Pages';
import Spinner from './components/Spinner';

import useSearch from './hooks/use-search';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 70px;
`;

const App = () => {
  const { loading, error, repos, search, page } = useSearch();
  const { total_count = 0, items = [] } = repos; //from github response

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const value = target.search.value.trim();
    search({ query: value });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Search
          placeholder="Search Github Repos..."
          type="text"
          name="search"
        />
      </form>
      {error && <div>Something went wrong ...</div>}
      {total_count > 0 && <p>Found {total_count.toLocaleString()} Items</p>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Layout>
            {repos && items.map((repo) => <Card key={repo.id} repo={repo} />)}
          </Layout>
          {total_count > 0 && (
            <Pages
              total={Math.min(total_count, 1000)}
              selected={page}
              onChange={(page) => search({ page })}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default App;
