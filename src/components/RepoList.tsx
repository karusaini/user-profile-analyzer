import { Card, CardContent } from "../components/ui/card";
import { Repo } from "../types";

interface Props {
  repos: Repo[];
}

export default function RepoList({ repos }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {repos.map((repo) => (
        <Card key={repo.id} className="hover:shadow-md transition">
          <CardContent className="space-y-2 p-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-sm text-muted-foreground">{repo.description}</p>
            <div className="text-sm flex gap-4">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
