import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { SetStateAction, useState } from "react";

interface Props {
  onSearch: (username: string) => void;
}

export default function UsernameInput({ onSearch }: Props) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex gap-2 max-w-md mx-auto my-8">
      <Input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setUsername(e.target.value)}
        className="flex-1"
      />
      <Button onClick={() => onSearch(username)} className="bg-blue-600 text-white">
        Search
      </Button>
    </div>
  );
}
