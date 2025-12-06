import RepoList from "./components/RepoList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h2 className="page-title">Trending Repos</h2>
      <RepoList />

      <div className="tab-bar">
        <div className="tab-item active">
          <span style={{ fontSize: "20px" }}>⭐</span>
          <span>Trending</span>
        </div>

        <div className="tab-item">
          <span style={{ fontSize: "20px" }}>⚙</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}

export default App;
