import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import RepoList from "./RepoList";
import CommitsChart from "./CommitsChart";

interface Props {
  repos: any[];
  commits: any[];
}

export default function TabsSection({ repos, commits }: Props) {
  return (
    <Tabs defaultValue="repos" className="mt-6">
      <TabsList className="bg-white/10 backdrop-blur mb-4">
        <TabsTrigger value="repos">Repositories</TabsTrigger>
        <TabsTrigger value="stats">Stats & Metrics</TabsTrigger>
        <TabsTrigger value="docs">API Documentation</TabsTrigger>
      </TabsList>

      <TabsContent value="repos">
        <RepoList repos={repos} />
      </TabsContent>
      <TabsContent value="stats">
        <CommitsChart data={commits} />
      </TabsContent>
      <TabsContent value="docs">
        <p className="text-sm text-gray-400">API docs coming soon...</p>
      </TabsContent>
    </Tabs>
  );
}
