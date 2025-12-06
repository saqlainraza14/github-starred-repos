import "./RepoItem.css";

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3 className="repo-name">{repo.name}</h3>
      <p className="repo-desc">{repo.description}</p>

      <div className="repo-footer">
        <div className="repo-owner">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="owner-avatar"
          />
          <span className="owner-name">{repo.owner.login}</span>
        </div>

        <div className="repo-stars">
          ⭐ {repo.stargazers_count.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
