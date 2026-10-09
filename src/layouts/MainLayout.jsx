import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function MainLayout() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#f0effa" }}
    >
      <Navbar />

      <div className="px-4 pt-6">
      <p className="text-sm font-medium text-black">
          Selamat Datang di HITVERSE
        </p>
      </div>

       <div className="px-4 pt-4">
    <h1 className="text-2xl font-bold text-[#292524]">
      Temukan Produk K-pop Favoritmu dari BigHit Entertainment
    </h1>
  </div>

      <header className="p-4 flex flex-col md:flex-row gap-2 justify-between items-center">
        <input
          type="text"
          placeholder="Cari Produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg bg-white"
        />  

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option>Semua Kategori</option>
          <option>Album</option>
          <option>Lightstick</option>
          <option>Merchandise</option>
        </select>
      </header>

      <main className="flex-1 p-6">
         <Outlet context={{ selectedCategory, searchTerm }} /> 
      </main>

      <footer className="bg-white text-black text-center p-4">
        <p>© 2026 HITVERSE | Version 1.0</p>
      </footer>
    </div>
  );
}