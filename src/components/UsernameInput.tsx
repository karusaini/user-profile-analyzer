import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Props {
  onSearch: (username: string) => void;
}

export default function UsernameInput({ onSearch }: Props) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 px-4 text-center">
      {/* Title & Description */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2 flex justify-center items-center gap-2">
        <GitHubLogoIcon className="w-7 h-7 text-black" />
        GitHub User Analyzer
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Enter a GitHub username to analyze their repositories, contributions, and insights.
      </p>

      {/* Search Box */}
      <div className="flex items-center gap-3 bg-white/30 backdrop-blur-md shadow-xl p-4 rounded-xl border border-gray-200">
        <div className="relative flex-1">
          <GitHubLogoIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 h-12 text-base placeholder:text-gray-400 border border-gray-300 rounded-lg focus-visible:ring-2 focus-visible:ring-primary transition-all"
          />
        </div>

        <Button
          onClick={handleSearch}
          className="h-12 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          🔍 Search
        </Button>
      </div>
    </div>
  );
}
