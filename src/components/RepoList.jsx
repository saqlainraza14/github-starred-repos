import { useEffect, useState, useCallback } from 'react';
import RepoItem from './RepoItem';
import { fetchRepos } from '../services/githubService';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadRepos = useCallback(async () => {
    setLoading(true);
    const newRepos = await fetchRepos(page);
    setRepos((prev) => [...prev, ...newRepos]);
    setLoading(false);
  }, [page]); 

  useEffect(() => {
    loadRepos();
  }, [loadRepos]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ paddingBottom: "70px" }}>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
};

export default RepoList;
