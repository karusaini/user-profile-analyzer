import * as React from "react";
import { Card } from "../components/ui/card";

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  created_at: string;
}

export default function UserProfileCard({ user }: { user: UserProfile }) {
  return (
    <Card className="p-6 flex flex-col sm:flex-row items-center gap-4 bg-white/5 text-black">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-24 h-24 rounded-full"
      />
      <div>
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          @{user.login}
        </a>
        <p className="mt-1 text-sm text-gray-600">{user.bio}</p>
        <p className="text-xs text-gray-400">
          Joined {new Date(user.created_at).toDateString()}
        </p>
      </div>
    </Card>
  );
}
