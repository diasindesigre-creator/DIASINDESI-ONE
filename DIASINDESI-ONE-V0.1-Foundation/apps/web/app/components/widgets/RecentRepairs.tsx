export default function RecentRepairs() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold mb-4">
        Τελευταίες Επισκευές
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th>Πελάτης</th>
            <th>Συσκευή</th>
            <th>Κατάσταση</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Γιάννης</td>
            <td>Laptop</td>
            <td>Σε εξέλιξη</td>
          </tr>

          <tr>
            <td>Μαρία</td>
            <td>iPhone</td>
            <td>Έτοιμο</td>
          </tr>

        </tbody>

      </table>
    </div>
  );
}