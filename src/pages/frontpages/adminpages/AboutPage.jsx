export default function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About</h1>

      <div className="bg-white p-6 rounded shadow">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/hitverse-logo.png"
              alt="HITVERSE Logo"
              className="w-64 h-auto"
            />
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-3">
              HITVERSE
            </h2>

            <p className="text-gray-600 leading-relaxed">
              HITVERSE merupakan aplikasi e-commerce sederhana
              yang menyediakan berbagai produk K-pop seperti album,
              lightstick, dan merchandise dari artis naungan BigHit Entertainment.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}