import {PieChart,Pie,Tooltip,Cell,ResponsiveContainer
  } from "recharts";
  
  const data = [
    { name: "United States", value: 52.199 },
    { name: "Canada", value: 22.8 },
    { name: "Mexico", value: 13.9 },
    { name: "Other", value: 11.2 },
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  const PieChartComponent = () => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        
        <ResponsiveContainer width="60%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
  
       
        <div style={{ marginLeft: 20 }}>
          <h4>Country Data</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {data.map((entry, index) => (
              <li key={index} style={{ marginBottom: 8, display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: COLORS[index % COLORS.length],
                    marginRight: 8,
                    borderRadius: 2
                  }}
                />
                <span>{entry.name}: {entry.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default PieChartComponent;
  