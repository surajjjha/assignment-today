import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from "recharts";

const data = [
  { device: "Linux", users: 20000 },
  { device: "Mac", users: 25000 },
  { device: "iOS", users: 18000 },
  { device: "Windows", users: 27000 },
  { device: "Android", users: 12000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];

const BarChartComponent = () => {
  return (
    <div style={{ width: "100%", height: 350, padding: "20px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="device" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ccc" }}
            cursor={{ fill: "rgba(136, 132, 216, 0.2)" }}
          />
          <Bar dataKey="users" radius={[8, 8, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
