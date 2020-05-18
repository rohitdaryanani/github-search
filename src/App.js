import React from 'react';
import Search from './components/search';

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const value = target?.search?.value.trim();
    // search({ query: value });
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
    </div>
  );
};

export default App;
