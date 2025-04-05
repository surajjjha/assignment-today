const StatsCard = ({ title, value, change }) => {
    return (
      <div className="p-4 rounded-lg shadow-md bg-white">
        <h3 className="text-md text-gray-500">{title}</h3>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className={`text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
          {change >= 0 ? `+${change}%` : `${change}%`}
        </p>
      </div>
    );
  };
  
  export default StatsCard;
  