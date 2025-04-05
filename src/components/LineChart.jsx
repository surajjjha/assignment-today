import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 10000 },
  { month: "Feb", users: 12000 },
  { month: "Mar", users: 15000 },
  { month: "Apr", users: 20000 },
  { month: "May", users: 22000 },
  { month: "Jun", users: 18000 },
];

const LineChartComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>Total Users</h3>
        <p style={{ margin: 0, fontSize: "14px", color: "#555",padding:5 }}>
          Total Projects • Operating Status | This Year vs Last Year
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ borderRadius: "8px", fontSize: "14px" }}
            cursor={{ stroke: "#8884d8", strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            strokeWidth={3}
            dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
