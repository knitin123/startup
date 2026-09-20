import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            🌽 GaonKiMakki
          </h3>

          <p className="text-sm mt-4 text-gray-400 leading-relaxed">
            Farm to Home platform for makki aata, fresh corn
            and raw makki — directly sourced from farmers
            and local chakkis.
          </p>

          <p className="text-xs mt-4 text-green-400 font-medium">
            100% Natural • No Chemicals • Village Fresh
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white transition">Cart</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Customer Care
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📦 Fast Local Delivery</li>
            <li>💰 Cash on Delivery</li>
            <li>📞 Phone Support</li>
            <li>🔄 Easy Order Tracking</li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Contact Us
          </h4>

          <p className="text-sm text-gray-400">
            📍 Karhi, Madhya Pradesh
          </p>
          <p className="text-sm mt-2 text-gray-400">
            📞 +91 9XXXXXXXXX
          </p>
          <p className="text-sm mt-2 text-gray-400">
            ✉️ support@gaonkimakki.in
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              📘
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              📸
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              🐦
            </a>
          </div>

          <p className="text-xs mt-2 text-gray-500">
            Social pages coming soon
          </p>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} GaonKiMakki. All rights reserved.
        <span className="block sm:inline sm:ml-2">
          • Made with ❤️ for farmers & families
        </span>
      </div>
    </footer>
  );
}
