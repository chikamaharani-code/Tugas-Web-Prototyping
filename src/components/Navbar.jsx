import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="bg-white text-black px-6 py-4 flex items-center">
            <Link to="/" className="font-bold text-xl">
            </Link>

            <div className="font-bold text-2xl text-purple-800">
                HITVERSE
            </div>

        <div className="flex gap-6 ml-auto">
            <Link to="/dashboard" className="hover:text-purple-500">
            Dashboard
            </Link>
            <Link to="/cart" className="hover:text-purple-500">
            Keranjang
            </Link>
            <Link to="/checkout" className="hover:text-purple-500">
            Checkout
            </Link>
        </div>
     </nav>
    );
}