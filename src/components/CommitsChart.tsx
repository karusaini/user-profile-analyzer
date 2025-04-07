import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CommitData } from "../types";

interface Props {
  data: CommitData[];
}

export default function CommitsChart({ data }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-white/30 backdrop-blur-lg shadow-xl border border-white/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          📊 Commit Frequency (Latest Repo)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              className="text-sm" 
              tickFormatter={(str) => {
                const date = new Date(str);
                return `${date.getDate()}/${date.getMonth() + 1}`;
              }} 
            />
            <YAxis 
              label={{ value: "Commits", angle: -90, position: "insideLeft" }} 
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-2 rounded-lg shadow border border-gray-200">
                      <p className="text-sm font-semibold text-gray-700">{label}</p>
                      <p className="text-xs text-gray-500">Commits: {payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#4F46E5" 
              radius={[4, 4, 0, 0]} 
              isAnimationActive={true} 
              animationDuration={800} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
