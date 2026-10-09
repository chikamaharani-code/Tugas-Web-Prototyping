export default function AdminDashboard() {
  const products = [
    {
      name: "BTS – BE",
      category: "Album",
      sold: 3,
      stock: 10,
    },
    {
      name: "TXT – TEMPTATION",
      category: "Album",
      sold: 2,
      stock: 8,
    },
    {
      name: "CORTIS – COLOR OUTSIDE THE LINES",
      category: "Album",
      sold: 2,
      stock: 8,
    },
    {
      name: "BTS Official Light Stick",
      category: "Lightstick",
      sold: 3,
      stock: 5,
    },
    {
      name: "TXT Official Light Stick",
      category: "Lightstick",
      sold: 2,
      stock: 6,
    },
    {
      name: "CORTIS Official Light Stick",
      category: "Lightstick",
      sold: 2,
      stock: 6,
    },
    {
      name: "BTS – LOVE YOURSELF Answer",
      category: "Album",
      sold: 2,
      stock: 7,
    },
    {
      name: "TXT – FREEZE",
      category: "Album",
      sold: 2,
      stock: 8,
    },
    {
      name: "CORTIS – GREENGREEN",
      category: "Album",
      sold: 2,
      stock: 8,
    },
    {
      name: "BTS Merch Box",
      category: "Merchandise",
      sold: 2,
      stock: 5,
    },
    {
      name: "TXT Universe Hoodie",
      category: "Merchandise",
      sold: 1,
      stock: 4,
    },
    {
      name: "CORTIS Ball",
      category: "Merchandise",
      sold: 1,
      stock: 6,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Dashboard
      </h1>

      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-2">
          Selamat Datang di Admin HITVERSE
        </h2>

        <p className="text-gray-600">
          Kelola dan pantau informasi toko HITVERSE melalui halaman admin ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Total Produk</p>
          <h2 className="text-2xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Kategori</p>
          <h2 className="text-2xl font-bold mt-2">3</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Produk Terjual</p>
          <h2 className="text-2xl font-bold mt-2">24</h2>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Data Produk
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">
                  Produk
                </th>

                <th className="text-left p-3">
                  Kategori
                </th>

                <th className="text-center p-3">
                  Terjual
                </th>

                <th className="text-center p-3">
                  Stok
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b"
                >
                  <td className="p-3 font-medium">
                    {product.name}
                  </td>

                  <td className="p-3 text-gray-600">
                    {product.category}
                  </td>

                  <td className="p-3 text-center">
                    {product.sold}
                  </td>

                  <td className="p-3 text-center">
                    {product.stock}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}