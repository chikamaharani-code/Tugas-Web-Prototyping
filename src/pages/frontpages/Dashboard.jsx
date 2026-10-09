import { Link, useOutletContext } from "react-router-dom";

export default function Dashboard() {
  const { selectedCategory, searchTerm } = useOutletContext();

  const products = [
    {
      id: 1,
      name: "BE",
      artist: "BTS",
      category: "Album",
      price: "Rp 700.000",
      image: "/bts_be.jpg",
    },
    {
      id: 2,
      name: "The Name Chapter: TEMPTATION",
      artist: "TXT",
      category: "Album",
      price: "Rp 300.000",
      image: "/txt_temptation.jpg",
    },
    {
      id: 3,
      name: "COLOR OUTSIDE THE LINES",
      artist: "CORTIS",
      category: "Album",
      price: "Rp 375.000",
      image: "/cortis.jpg",
    },
    {
      id: 4,
      name: "Official Light Stick",
      artist: "BTS",
      category: "Lightstick",
      price: "Rp 900.000",
      image: "/bts_ls.jpg",
    },
    {
      id: 5,
      name: "Official Light Stick",
      artist: "TXT",
      category: "Lightstick",
      price: "Rp 750.000",
      image: "/txt_ls.jpg",
    },
    {
      id: 6,
      name: "Official Light Stick",
      artist: "CORTIS",
      category: "Lightstick",
      price: "Rp 850.000",
      image: "/cortis_ls.jpg",
    },
    {
      id: 7,
      name: "LOVE YOURSELF 結 'Answer'",
      artist: "BTS",
      category: "Album",
      price: "Rp 400.000",
      image: "/bts_ly.jpg",
    },
    {
      id: 8,
      name: "The Chaos Chapter: FREEZE",
      artist: "TXT",
      category: "Album",
      price: "Rp 395.000",
      image: "/txt_chaos.jpg",
    },
    {
      id: 9,
      name: "GREENGREEN",
      artist: "CORTIS",
      category: "Album",
      price: "Rp 450.000",
      image: "/cortis_green.jpg",
    },
    {
      id: 10,
      name: "BTS Merch Box",
      artist: "BTS",
      category: "Merchandise",
      price: "Rp 1.450.000",
      image: "/bts_merch.jpg",
    },
    {
      id: 11,
      name: "Universe Hoodie",
      artist: "TXT",
      category: "Merchandise",
      price: "Rp 750.000",
      image: "/txt_merch.jpg",
    },
    {
      id: 12,
      name: "CORTIS Ball",
      artist: "CORTIS",
      category: "Merchandise",
      price: "Rp 750.000",
      image: "/cortis_merch.jpg",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const cocokKategori =
      selectedCategory === "Semua Kategori" ||
      product.category === selectedCategory;

    const cocokPencarian =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artist.toLowerCase().includes(searchTerm.toLowerCase());

    return cocokKategori && cocokPencarian;
  });

  return (
    <div className="min-h-screen bg-[#f0effa]">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition border border-[#d6d0f3]"
          >
            <div className="h-56 bg-white rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-[#E76F51]">
                {product.artist}
              </p>

              <h2 className="font-bold text-lg text-[#292524] mt-1">
                {product.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {product.category}
              </p>

              <p className="font-bold text-[#292524] text-lg mt-3">
                {product.price}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="block text-center bg-[#9785ff] hover:bg-[#7779ef] text-white font-semibold rounded-xl py-2 mt-4 transition"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}