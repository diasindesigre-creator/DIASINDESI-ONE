import QuickActions from "../components/widgets/QuickActions";
import RecentRepairs from "../components/widgets/RecentRepairs";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <QuickActions />

      <RecentRepairs />

    </div>
  );
}