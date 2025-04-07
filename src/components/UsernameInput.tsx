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

  return (
    <div className="w-full max-w-xl mx-auto mt-10 px-4">
      <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-2xl border border-gray-200">
        <div className="relative flex-1">
          <GitHubLogoIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10 h-12 text-base placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-gray-300 transition-all"
          />
        </div>

        <Button
          onClick={handleSearch}
          className="h-12 px-6 bg-black text-white rounded hover:bg-gray-800 transition-all"
        >
          🔍 Search
        </Button>
      </div>
    </div>
  );
}
