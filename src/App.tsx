import { useState } from "react";
import UsernameInput from "./components/UsernameInput";
import RepoList from "./components/RepoList";
import CommitsChart from "./components/CommitsChart";
import StatsAndMetrics from "./components/StatsAndMetrics";
import UserProfileCard from "./components/UserProfileCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import axios from "axios";
import { Repo, CommitData, LanguageStats, ProfileStats } from "./types";

interface UserProfile extends ProfileStats {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [commitData, setCommitData] = useState<CommitData[]>([]);
  const [languageStats, setLanguageStats] = useState<LanguageStats[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRepos = async (username: string) => {
    try {
      setLoading(true);

      const userRes = await axios.get(`https://api.github.com/users/${username}`);
      setUser(userRes.data);

      const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(repoRes.data);

      const langCount: Record<string, number> = {};
      repoRes.data.forEach((repo: Repo) => {
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        }
      });

      const total = Object.values(langCount).reduce((a, b) => a + b, 0);
      const langs: LanguageStats[] = Object.entries(langCount).map(([language, count]) => ({
        language,
        count,
        percentage: Number(((count / total) * 100).toFixed(1)),
      }));
      setLanguageStats(langs);

      if (repoRes.data.length > 0) {
        const firstRepo = repoRes.data[0].name;
        const commitRes = await axios.get(`https://api.github.com/repos/${username}/${firstRepo}/commits`);

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
      setUser(null);
      setRepos([]);
      setCommitData([]);
      setLanguageStats([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">GitHub User Analyzer</h1>

      <div className="max-w-2xl mx-auto mb-8">
        <UsernameInput onSearch={fetchRepos} />
      </div>

      {loading && <p className="text-center text-gray-400">Loading...</p>}

      {user && !loading && (
        <>
          <div className="max-w-4xl mx-auto">
            <UserProfileCard user={user} />
          </div>

          <div className="mt-8 max-w-5xl mx-auto">
            <Tabs defaultValue="repos" className="w-full">
              <TabsList className="mb-4 bg-white/10 backdrop-blur p-1 rounded-xl w-full flex justify-center">
                <TabsTrigger value="repos">Repositories</TabsTrigger>
                <TabsTrigger value="stats">Stats & Metrics</TabsTrigger>
                <TabsTrigger value="docs">API Documentation</TabsTrigger>
              </TabsList>

              <TabsContent value="repos">
                <RepoList repos={repos} />
              </TabsContent>

              <TabsContent value="stats">
                <StatsAndMetrics languages={languageStats} profile={user} />
                <CommitsChart data={commitData} />
              </TabsContent>

              <TabsContent value="docs">
                <div className="bg-white shadow rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">GitHub API Endpoints</h2>
                  <p className="text-sm text-gray-700">🔹 <code>GET /users/:username</code> - Get user profile</p>
                  <p className="text-sm text-gray-700">🔹 <code>GET /users/:username/repos</code> - Get repositories</p>
                  <p className="text-sm text-gray-700">🔹 <code>GET /repos/:username/:repo/commits</code> - Get commits</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
