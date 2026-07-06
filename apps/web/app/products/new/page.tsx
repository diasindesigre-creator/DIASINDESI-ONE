import Link from "next/link";
import { createProduct } from "./actions";

export default function NewProductPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Νέο Προϊόν
      </h1>

      <form action={createProduct} className="space-y-6">

        <div className="grid grid-cols-2 gap-4">

          <input
            name="code"
            placeholder="Κωδικός"
            className="border rounded-lg p-3"
          />

          <input
            name="barcode"
            placeholder="Barcode"
            className="border rounded-lg p-3"
          />

          <input
            name="name"
            placeholder="Όνομα Προϊόντος"
            required
            className="border rounded-lg p-3 col-span-2"
          />

          <textarea
            name="description"
            placeholder="Περιγραφή"
            className="border rounded-lg p-3 col-span-2"
            rows={4}
          />

          <input
            name="brand"
            placeholder="Μάρκα"
            className="border rounded-lg p-3"
          />

          <input
            name="categoryId"
            type="number"
            placeholder="ID Κατηγορίας"
            className="border rounded-lg p-3"
          />

          <input
            name="cost"
            type="number"
            step="0.01"
            placeholder="Τιμή Αγοράς"
            className="border rounded-lg p-3"
          />

          <input
            name="price"
            type="number"
            step="0.01"
            required
            placeholder="Τιμή Πώλησης"
            className="border rounded-lg p-3"
          />

          <input
            name="stock"
            type="number"
            defaultValue={0}
            placeholder="Απόθεμα"
            className="border rounded-lg p-3"
          />

          <input
            name="minStock"
            type="number"
            defaultValue={0}
            placeholder="Ελάχιστο Απόθεμα"
            className="border rounded-lg p-3"
          />

        </div>

        <div className="flex gap-3">

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Αποθήκευση
          </button>

          <Link
            href="/products"
            className="bg-gray-300 px-8 py-3 rounded-lg"
          >
            Ακύρωση
          </Link>

        </div>

      </form>

    </div>
  );
}