import DashboardCards from "../../components/Admin/Dashboard/DashboardCards";
import PropertyTable from "../../components/Admin/Dashboard/PropertyTable";
import RecentMessages from "../../components/Admin/Dashboard/RecentMessages";

export default function Home() {
  return (
    <div className="p-6 space-y-10">
      <DashboardCards />
      <PropertyTable />
      <RecentMessages />
    </div>
  );
}
