import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("Transfer Bank");

  const [namaPenerima, setNamaPenerima] = useState("");
  const [nomorHP, setNomorHP] = useState("");
  const [alamatLengkap, setAlamatLengkap] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace(/\D/g, "")) * item.quantity,
    0
  );

  const alamatLengkapDiisi =
    namaPenerima.trim() !== "" &&
    nomorHP.trim() !== "" &&
    alamatLengkap.trim() !== "";

  return (
    <div className="min-h-screen bg-[#f0eefb]">
      <Navbar />

      <main className="p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-[#292524] mb-6">
            Checkout
          </h1>

          <div className="bg-white rounded-2xl border border-[#d6d0f3] p-6">

            <h2 className="text-xl font-bold text-[#292524] mb-4">
              Produk
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-600">
                Belum ada produk untuk checkout.
              </p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <div className="w-24 h-24 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-[#E76F51]">
                        {item.artist}
                      </p>

                      <h3 className="font-semibold text-[#292524]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Jumlah: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-[#292524]">
                      Rp{" "}
                      {(
                        Number(item.price.replace(/\D/g, "")) *
                        item.quantity
                      ).toLocaleString("id-ID")}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <>
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-[#292524] mb-4">
                    Alamat Pengiriman
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-semibold text-[#292524] mb-2">
                        Nama Penerima
                      </label>

                      <input
                        type="text"
                        value={namaPenerima}
                        onChange={(e) => setNamaPenerima(e.target.value)}
                        placeholder="Masukkan nama penerima"
                        className="w-full px-4 py-3 border rounded-xl bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#292524] mb-2">
                        Nomor HP
                      </label>

                      <input
                        type="text"
                        value={nomorHP}
                        onChange={(e) => setNomorHP(e.target.value)}
                        placeholder="Masukkan nomor HP"
                        className="w-full px-4 py-3 border rounded-xl bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#292524] mb-2">
                        Alamat Lengkap
                      </label>

                      <textarea
                        value={alamatLengkap}
                        onChange={(e) => setAlamatLengkap(e.target.value)}
                        placeholder="Masukkan alamat lengkap"
                        rows="4"
                        className="w-full px-4 py-3 border rounded-xl bg-white resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block font-semibold text-[#292524] mb-2">
                    Metode Pembayaran
                  </label>

                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl bg-white"
                  >
                    <option>Transfer Bank</option>
                    <option>E-Wallet</option>
                    <option>COD</option>
                  </select>
                </div>

                <div className="flex justify-between items-center mt-6 pt-5 border-t">
                  <span className="font-semibold text-lg">
                    Total Pembayaran
                  </span>

                  <span className="font-bold text-xl text-[#292524]">
                    Rp {total.toLocaleString("id-ID")}
                  </span>
                </div>

                <button
                  onClick={() => setShowPopup(true)}
                  disabled={!alamatLengkapDiisi}
                  className={`w-full text-white font-semibold rounded-xl py-3 mt-6 transition ${
                    alamatLengkapDiisi
                      ? "bg-[#9785ff] hover:bg-[#7779ef]"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Beli Sekarang
                </button>

                {!alamatLengkapDiisi && (
                  <p className="text-sm text-red-500 text-center mt-2">
                    Silakan lengkapi alamat pengiriman terlebih dahulu.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-6 text-center">
            <h2 className="text-xl font-bold text-[#292524]">
              Pesanan berhasil dibuat
            </h2>

            <p className="text-gray-600 mt-2">
              Terima kasih sudah berbelanja di HITVERSE.
            </p>

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
  );
}