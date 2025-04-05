import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";
import StatsCard from "../components/StatsCard";
import LineChartComponent from "../components/LineChart";
import BarChartComponent from "../components/BarChart";
import PieChartComponent from "../components/PieChart";
import SideBarRight from "../components/SideBarRight"

const Dashboard = () => {
    return (
        <>
        <Navbar />
            <div className="flex  w-[90vw] overflow-hidden">

                <div className="w-[20%] bg-gray-200">
                    <Sidebar />
                </div>
                <div className="flex-1 p-5">
                    
                    
                    <div className="grid grid-cols-4 gap-4 mt-5">
                        <StatsCard title="Views" value="7,265" change={11.01} />
                        <StatsCard title="Visits" value="3,671" change={-0.03} />
                        <StatsCard title="New Users" value="156" change={15.03} />
                        <StatsCard title="Active Users" value="2,318" change={6.08} />
                    </div>
                    <br></br>
                    <LineChartComponent />
                    
                    <br></br>
                    <BarChartComponent />
                    <br></br>
                    <PieChartComponent />

                </div>
                <div className="w-[20%] bg-gray-200">
                    <SideBarRight />
                </div>
            </div>
        </>

    );
};

export default Dashboard;
