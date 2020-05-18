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
          `https://api.github.com/search/repositories?q=${query}in:name&sort=stars&order=desc&page=${page}&per_page=100`
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
  const search = ({ query: q, page: p }) => {
    if (q) {
      setQuery(q);
      setPage(1);
    }
    if (p) setPage(p);
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
