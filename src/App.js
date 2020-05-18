import React from 'react';
import Search from './components/Search';
import Card from './components/Card';
import Layout from './components/Layout';
import Pages from './components/Pages';

import useSearch from './hooks/use-search';

const App = () => {
  const { loading, error, repos, search, page } = useSearch();
  const { total_count = 0, items = [] } = repos; //from github response

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const value = target?.search?.value.trim();
    search({ query: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Search
          placeholder="Search Github Repos..."
          type="text"
          name="search"
        />
      </form>
      {error && <div>Something went wrong ...</div>}
      {loading ? (
        <p>Loading...</p>
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
    </div>
  );
};

export default App;
