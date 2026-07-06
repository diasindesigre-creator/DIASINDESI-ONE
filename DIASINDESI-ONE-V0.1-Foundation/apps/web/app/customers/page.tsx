export default function CustomersPage() {
  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Πελάτες
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          + Νέος Πελάτης
        </button>
      </div>

      <input
        placeholder="Αναζήτηση..."
        className="border rounded-lg p-2 w-full mb-6"
      />

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 text-left">Όνομα</th>
            <th className="p-3 text-left">Τηλέφωνο</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Πόλη</th>
          </tr>

        </thead>

        <tbody>

          <tr className="border-t">
            <td className="p-3">Γιάννης Παπαδόπουλος</td>
            <td className="p-3">6977000000</td>
            <td className="p-3">giannis@email.gr</td>
            <td className="p-3">Γρεβενά</td>
          </tr>

          <tr className="border-t">
            <td className="p-3">Μαρία Κωνσταντίνου</td>
            <td className="p-3">6988000000</td>
            <td className="p-3">maria@email.gr</td>
            <td className="p-3">Κοζάνη</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}