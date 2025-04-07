import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import RepoList from "./RepoList";
import CommitsChart from "./CommitsChart";

interface Props {
  repos: any[];
  commits: any[];
}

export default function TabsSection({ repos, commits }: Props) {
  return (
    <Tabs defaultValue="repos" className="w-full max-w-4xl mx-auto mt-10">
      <TabsList className="bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-xl flex justify-center space-x-2 shadow-lg">
        <TabsTrigger
          value="repos"
          className="data-[state=active]:bg-primary data-[state=active]:text-white
            text-sm font-medium px-5 py-2 rounded-lg transition-all hover:bg-primary/10"
        >
          📁 Repositories
        </TabsTrigger>

        <TabsTrigger
          value="stats"
          className="data-[state=active]:bg-primary data-[state=active]:text-white
            text-sm font-medium px-5 py-2 rounded-lg transition-all hover:bg-primary/10"
        >
          📊 Stats & Metrics
        </TabsTrigger>
      </TabsList>

      <TabsContent value="repos" className="mt-8">
        <RepoList repos={repos} />
      </TabsContent>

      <TabsContent value="stats" className="mt-8">
        <CommitsChart data={commits} />
      </TabsContent>
    </Tabs>
  );
}
