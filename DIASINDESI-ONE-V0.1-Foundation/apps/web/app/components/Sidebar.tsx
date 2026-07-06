export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        DIASINDESI ONE
      </h2>

      <nav className="space-y-4">

        <a href="#" className="block hover:text-blue-400">
          Dashboard
        </a>

        <a href="#" className="block hover:text-blue-400">
          Πελάτες
        </a>

        <a href="#" className="block hover:text-blue-400">
          Service
        </a>

        <a href="#" className="block hover:text-blue-400">
          Πωλήσεις
        </a>

        <a href="#" className="block hover:text-blue-400">
          Αποθήκη
        </a>

        <a href="#" className="block hover:text-blue-400">
          Ρυθμίσεις
        </a>

      </nav>
    </aside>
  );
}