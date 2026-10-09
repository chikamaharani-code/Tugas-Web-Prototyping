import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const products = [
    {
      id: 1,
      name: "BE",
      artist: "BTS",
      category: "Album",
      price: "Rp 700.000",
      image: "/bts_be.jpg",
      description:
        "Album BE (Deluxe Edition) hadir dengan kemasan eksklusif dan berisi berbagai item koleksi, yaitu CD, photobook, making book, frame, 8 photocard, polaroid, 7 postcard, dan poster resmi."
    },
    {
      id: 2,
      name: "The Name Chapter: TEMPTATION",
      artist: "TXT",
      category: "Album",
      price: "Rp 300.000",
      image: "/txt_temptation.jpg",
      description:
        "Album The Name Chapter: TEMPTATION hadir dalam kemasan album yang dilengkapi dengan CD, photobook, lyric book, photocard, postcard, sticker, dan poster."
    },
    {
      id: 3,
      name: "COLOR OUTSIDE THE LINES",
      artist: "CORTIS",
      category: "Album",
      price: "Rp 375.000",
      image: "/cortis.jpg",
      description:
        "Album COLOR OUTSIDE THE LINES hadir dalam kemasan khusus yang dilengkapi dengan CD, photobook, lyric book, photocard, postcard, sticker, dan poster resmi."
    },
    {
      id: 4,
      name: "Official Light Stick",
      artist: "BTS",
      category: "Lightstick",
      price: "Rp 900.000",
      image: "/bts_ls.jpg",
      description:
        "BTS Official Light Stick hadir dalam satu paket yang terdiri dari light stick, strap, user guide, dan kemasan resmi."
    },
    {
      id: 5,
      name: "Official Light Stick",
      artist: "TXT",
      category: "Lightstick",
      price: "Rp 750.000",
      image: "/txt_ls.jpg",
      description:
        "TXT Official Light Stick dilengkapi dengan light stick, strap, user guide, dan kemasan resmi."
    },
    {
      id: 6,
      name: "Official Light Stick",
      artist: "CORTIS",
      category: "Lightstick",
      price: "Rp 850.000",
      image: "/cortis_ls.jpg",
      description:
        "CORTIS Official Light Stick hadir dalam satu paket yang terdiri dari light stick, strap, user guide, dan kemasan resmi."
    },
    {
      id: 7,
      name: "LOVE YOURSELF 結 'Answer'",
      artist: "BTS",
      category: "Album",
      price: "Rp 400.000",
      image: "/bts_ly.jpg",
      description:
        "Album fisik LOVE YOURSELF 結 'Answer' berisi CD, photobook, lyric book, photocard, mini book, notes, dan poster."
    },
    {
      id: 8,
      name: "The Chaos Chapter: FREEZE",
      artist: "TXT",
      category: "Album",
      price: "Rp 395.000",
      image: "/txt_chaos.jpg",
      description:
        "Album fisik The Chaos Chapter: FREEZE hadir dalam kemasan album yang dilengkapi dengan CD, photobook, lyric book, photocard, postcard, sticker, dan poster resmi."
    },
    {
      id: 9,
      name: "GREENGREEN",
      artist: "CORTIS",
      category: "Album",
      price: "Rp 450.000",
      image: "/cortis_green.jpg",
      description:
        "Album GREENGREEN hadir dengan kemasan koleksi yang berisi CD, photobook, lyric book, photocard, postcard, sticker, dan poster resmi."
    },
    {
      id: 10,
      name: "BTS Merch Box",
      artist: "BTS",
      category: "Merchandise",
      price: "Rp 1.450.000",
      image: "/bts_merch.jpg",
      description:
        "BTS Merch Box merupakan paket merchandise koleksi yang berisi produk merchandise bertema BTS, item dekorasi, collectible items, dan kemasan khusus."
    },
    {
      id: 11,
      name: "Universe Hoodie",
      artist: "TXT",
      category: "Merchandise",
      price: "Rp 750.000",
      image: "/txt_merch.jpg",
      description:
        "TXT Universe Hoodie merupakan merchandise berupa hoodie dengan desain bertema TXT yang dilengkapi dengan kemasan khusus dan detail desain bertema TXT."
    },
    {
      id: 12,
      name: "CORTIS Ball",
      artist: "CORTIS",
      category: "Merchandise",
      price: "Rp 750.000",
      image: "/cortis_merch.jpg",
      description:
        "CORTIS Ball merupakan boneka koleksi bertema CORTIS dengan desain yang dibuat untuk menampilkan karakter dan identitas CORTIS."
    }
  ];

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f0eefb] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#292524]">
            Produk tidak ditemukan
          </h1>

          <Link
            to="/dashboard"
            className="inline-block bg-[#9785ff] hover:bg-[#7779ef] text-white font-semibold rounded-xl px-6 py-2 mt-4 transition"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0eefb] p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/dashboard"
          className="inline-block text-[#6D51E7] font-semibold mb-6 hover:opacity-70"
        >
          ← Kembali ke Produk
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-[#d6d0f3] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="h-96 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-[#E76F51]">
                {product.artist}
              </p>

              <h1 className="text-3xl font-bold text-[#292524] mt-2">
                {product.name}
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                {product.category}
              </p>

              <p className="text-2xl font-bold text-[#292524] mt-6">
                {product.price}
              </p>

              <div className="mt-6">
                <h2 className="font-bold text-lg text-[#292524]">
                  Deskripsi Produk
                </h2>

                <p className="text-gray-600 leading-relaxed mt-2">
                  {product.description}
                </p>
              </div>

          <button
            className="w-full bg-[#9785ff] hover:bg-[#7779ef] text-white font-semibold rounded-xl py-3 mt-8 transition"
            onClick={() => {
              addToCart(product);
              setShowPopup(true);

              setTimeout(() => {
                setShowPopup(false);
              }, 2000);
            }}
          >
            Tambah ke Keranjang
          </button>
            </div>

          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg px-8 py-6 text-center">
              <h2 className="text-xl font-bold text-[#292524]">
                Produk berhasil ditambahkan ke keranjang
              </h2>

              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#9785ff] hover:bg-[#7779ef] text-white font-semibold rounded-xl px-8 py-2 mt-5 transition"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
}