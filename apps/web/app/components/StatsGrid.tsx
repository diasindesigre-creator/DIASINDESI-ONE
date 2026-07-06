import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">

      <StatCard
        title="Πελάτες"
        value="1.523"
        color="bg-blue-600"
      />

      <StatCard
        title="Επισκευές"
        value="34"
        color="bg-green-600"
      />

      <StatCard
        title="Τζίρος"
        value="2.340 €"
        color="bg-orange-500"
      />

      <StatCard
        title="Απόθεμα"
        value="1.489"
        color="bg-purple-600"
      />

    </div>
  );
}