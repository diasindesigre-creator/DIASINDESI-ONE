import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Προϊόντα
        </h1>

        <Link
          href="/products/new"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Νέο Προϊόν
        </Link>

      </div>

      <input
        placeholder="Αναζήτηση προϊόντος..."
        className="border rounded-lg p-3 w-full mb-6"
      />

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-200 rounded-lg">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3 text-left">
                Εικόνα
              </th>

              <th className="p-3 text-left">
                Κωδικός
              </th>

              <th className="p-3 text-left">
                Barcode
              </th>

              <th className="p-3 text-left">
                Προϊόν
              </th>

              <th className="p-3 text-left">
                Κατηγορία
              </th>

              <th className="p-3 text-right">
                Τιμή
              </th>

              <th className="p-3 text-center">
                Απόθεμα
              </th>

              <th className="p-3 text-center">
                Ενέργειες
              </th>

            </tr>

          </thead>

          <tbody>

            {products.length === 0 && (

              <tr>

                <td
                  colSpan={8}
                  className="text-center p-8 text-gray-500"
                >
                  Δεν υπάρχουν προϊόντα.
                </td>

              </tr>

            )}

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-t"
              >

                <td className="p-3">

                  {product.image ? (

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 rounded object-cover"
                    />

                  ) : (

                    <div className="w-14 h-14 rounded bg-gray-200 flex items-center justify-center text-xs">
                      -
                    </div>

                  )}

                </td>

                <td className="p-3">
                  {product.code}
                </td>

                <td className="p-3">
                  {product.barcode}
                </td>

                <td className="p-3 font-medium">
                  {product.name}
                </td>

                <td className="p-3">
                  {product.category?.name ?? "-"}
                </td>

                <td className="p-3 text-right">
                  {product.price.toFixed(2)} €
                </td>

                <td className="p-3 text-center">
                  {product.stock}
                </td>

                <td className="p-3">

                  <div className="flex justify-center gap-2">

                    <Link
                      href={`/products/${product.id}/edit`}
                      className="bg-amber-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>

                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}