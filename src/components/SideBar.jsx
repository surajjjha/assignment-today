import { FaChartPie, FaUser, FaShoppingCart, FaProjectDiagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-[110vh] bg-black-100 p-5 " >
      <h2 className="text-xl font-bold mb-5">ByeWind</h2>
      <ul>
        <li className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md">
          <FaChartPie /> Overview
        </li>
        <li className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md">
          <FaShoppingCart /> eCommerce
        </li>
        <li className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md">
          <FaProjectDiagram /> Projects
        </li>
        <li className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md">
          <FaUser /> User Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
