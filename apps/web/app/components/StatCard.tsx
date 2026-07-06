type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({ title, value, color }: Props) {
  return (
    <div
      className={`rounded-xl p-5 text-white shadow-lg ${color}`}
    >
      <div className="text-sm opacity-80">
        {title}
      </div>

      <div className="text-3xl font-bold mt-2">
        {value}
      </div>
    </div>
  );
}