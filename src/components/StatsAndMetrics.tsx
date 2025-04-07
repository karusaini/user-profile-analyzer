import React from "react"
import { LanguageStats, ProfileStats } from "../types"

interface StatsAndMetricsProps {
  languages: LanguageStats[]
  profile: ProfileStats & {
    avatar_url: string
    name: string
    login: string
    bio: string
  }
}

const StatsAndMetrics: React.FC<StatsAndMetricsProps> = ({ languages, profile }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Language Distribution */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/30">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">📊 Language Distribution</h2>
        <ul className="space-y-3">
          {languages.length > 0 ? (
            languages.map((lang, idx) => (
              <li key={idx} className="flex justify-between items-center text-gray-700 font-medium">
                <span>{lang.language}</span>
                <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">{lang.percentage}%</span>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No language data available.</p>
          )}
        </ul>
      </div>

      {/* Profile Analytics */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/30">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">👤 Profile Analytics</h2>
        <div className="space-y-2 text-gray-700">
          <p><strong>Name:</strong> {profile.name || "N/A"}</p>
          <p><strong>Followers:</strong> {profile.followers}</p>
          <p><strong>Following:</strong> {profile.following}</p>
          <p><strong>Public Repos:</strong> {profile.public_repos}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsAndMetrics
