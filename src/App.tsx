import { useState } from "react";
import UsernameInput from "./components/UsernameInput";
import RepoList from "./components/RepoList";
import CommitsChart from "./components/CommitsChart";
import { Repo, CommitData } from "./types";
import axios from "axios";



function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [commitData, setCommitData] = useState<CommitData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRepos = async (username: string) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(res.data);

      // Bonus: Fetch commits for first repo (if exists)
      if (res.data.length > 0) {
        const firstRepo = res.data[0].name;
        const commitRes = await axios.get(
          `https://api.github.com/repos/${username}/${firstRepo}/commits`
        );

        const commitCounts: Record<string, number> = {};
        commitRes.data.forEach((commit: any) => {
          const date = new Date(commit.commit.author.date).toLocaleDateString();
          commitCounts[date] = (commitCounts[date] || 0) + 1;
        });

        const chartData: CommitData[] = Object.keys(commitCounts).map((date) => ({
          date,
          count: commitCounts[date],
        }));

        setCommitData(chartData.reverse().slice(0, 7));
      }
    } catch (err) {
      alert("User not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Analyzer</h1>
      <UsernameInput onSearch={fetchRepos} />
      {loading ? <p className="text-center mt-4">Loading...</p> : <RepoList repos={repos} />}
      {commitData.length > 0 && <CommitsChart data={commitData} />}

    </div>
  );
}

export default App;
