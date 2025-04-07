import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Repo } from "../types";

interface Props {
  repos: Repo[];
}

const REPOS_PER_PAGE = 10;

export default function RepoList({ repos }: Props) {
  const [visibleCount, setVisibleCount] = useState(REPOS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + REPOS_PER_PAGE);
  };

  const visibleRepos = repos.slice(0, visibleCount);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Latest Repositories</h2>

      {visibleRepos.map((repo) => (
        <Card key={repo.id} className="w-full bg-white shadow-sm border">
          <CardContent className="p-4 flex flex-col md:flex-row justify-between gap-4">
            {/* Left Side Content */}
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-semibold text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Public
                </span>
              </div>

              <p className="text-sm text-gray-600">
                {repo.description || "No description provided"}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full inline-block" />
                  {repo.language || "N/A"}
                </span>
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>👁️ {repo.watchers_count}</span>
              </div>
            </div>

            {/* View Button */}
            <div className="flex justify-center md:justify-end items-center">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-gray-800 text-white text-sm rounded hover:bg-gray-700"
              >
                View
              </a>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Show More Pagination Button */}
      {visibleCount < repos.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
