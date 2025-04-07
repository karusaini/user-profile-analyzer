// components/CommitChart.tsx

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card, CardContent } from "../components/ui/card"; // ShadCN UI card

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  data: { date: string; count: number }[];
}

const CommitChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Commits",
        data: data.map((d) => d.count),
        backgroundColor: "#4f46e5",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-6 bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">📊 Commit Chart</h2>
        <Bar data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default CommitChart;
