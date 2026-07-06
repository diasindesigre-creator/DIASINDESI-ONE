export default function Header() {
  return (
    <header className="bg-white shadow p-5 flex justify-between items-center">

      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Καλώς ήρθες στο DIASINDESI ONE
        </p>
      </div>

      <div className="flex items-center gap-4">

        <span className="text-gray-600">
          Administrator
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          A
        </div>

      </div>

    </header>
  );
}