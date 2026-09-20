import { Link } from "react-router-dom";

export default function CTAStrip() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-800 py-14">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Taste the Purity of Village Makki 🌽
        </h2>

        <p className="mt-3 text-lg text-green-100">
          Fresh, hygienic and farmer-sourced products — 
          delivered directly to your home.
        </p>

        <div className="mt-6">
          <Link
            to="/products"
            className="inline-block bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Explore Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
