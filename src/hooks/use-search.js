import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState({});
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    // return if query is empty
    if (!query) return;

    const search = async () => {
      setLoading(true);
      setError(false);

      try {
        const { data } = await axios.get(
          `https://api.github.com/search/repositories?q=${query}in:name&sort=stars&order=asc&page=${page}&per_page=100`
        );
        setRepos(data);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    search();
  }, [query, page]);

  // aliasing to avoid shadow scope
  const search = ({ query: q }) => {
    if (q) {
      setQuery(q);
    }
  };

  return {
    loading,
    error,
    repos,
    search,
    page,
  };
};
export default useSearch;
