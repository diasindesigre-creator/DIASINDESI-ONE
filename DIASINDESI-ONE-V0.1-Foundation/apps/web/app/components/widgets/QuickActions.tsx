export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold mb-4">
        Γρήγορες Ενέργειες
      </h2>

      <div className="grid grid-cols-2 gap-3">

        <button className="bg-blue-600 text-white rounded-lg p-3">
          Νέα Παραλαβή
        </button>

        <button className="bg-green-600 text-white rounded-lg p-3">
          Νέος Πελάτης
        </button>

        <button className="bg-orange-500 text-white rounded-lg p-3">
          Νέα Πώληση
        </button>

        <button className="bg-purple-600 text-white rounded-lg p-3">
          Απόθεμα
        </button>

      </div>
    </div>
  );
}