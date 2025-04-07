import { Card, CardContent } from "../components/ui/card";
import { LanguageStats, ProfileStats } from "../types";

interface Props {
  languages: LanguageStats[];
  profile: ProfileStats;
}

export default function StatsAndMetrics({ languages, profile }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800">📈 Stats & Metrics</h2>

      {/* Repository Languages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((lang) => (
          <Card key={lang.language} className="border bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="text-sm text-gray-500">Language</div>
              <div className="text-lg font-semibold text-gray-800">
                {lang.language}
              </div>
              <div className="mt-2 text-sm">Repos: {lang.count}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Profile Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white border">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Followers</div>
            <div className="text-2xl font-bold text-gray-800">
              {profile.followers}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Following</div>
            <div className="text-2xl font-bold text-gray-800">
              {profile.following}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Public Repos</div>
            <div className="text-2xl font-bold text-gray-800">
              {profile.public_repos}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Gists</div>
            <div className="text-2xl font-bold text-gray-800">
              {profile.public_gists}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Joined GitHub */}
      <div className="text-center text-sm text-gray-500 mt-2">
        Joined GitHub on{" "}
        <span className="font-medium text-gray-700">
          {new Date(profile.created_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
