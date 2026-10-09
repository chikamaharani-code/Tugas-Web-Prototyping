import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price.replace(/\D/g, "")) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f0eefb]">
      <Navbar />

      <main className="p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-[#292524] mb-6">
            Keranjang
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-gray-600">
                Belum ada produk di keranjang.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-[#d6d0f3] flex flex-col md:flex-row items-center gap-4"
                >
                  <div className="w-28 h-28 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-[#E76F51] font-medium">
                      {item.artist}
                    </p>

                    <h2 className="font-bold text-lg text-[#292524]">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {item.category}
                    </p>

                    <p className="font-semibold mt-2">
                      {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 rounded-lg bg-gray-200"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 rounded-lg bg-[#9785ff] text-white"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-medium"
                  >
                    Hapus
                  </button>
                </div>
              ))}

              <div className="bg-white rounded-2xl p-6 border border-[#d6d0f3]">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">
                    Total
                  </span>

                  <span className="font-bold text-xl text-[#292524]">
                    Rp {total.toLocaleString("id-ID")}
                  </span>
                </div>

                 <Link
                    to="/checkout"
                    className="block text-center bg-[#9785ff] hover:bg-[#7779ef] text-white font-semibold rounded-xl py-3 mt-5 transition"
                  >
                    Checkout
                  </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}