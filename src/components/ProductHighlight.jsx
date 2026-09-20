import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductHighlight() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4))); // top 4
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Our Popular Products 🌽
          </h2>
          <p className="text-gray-600 mt-2">
            Fresh makki products loved by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >
              <div className="h-32 bg-yellow-100 rounded mb-3 flex items-center justify-center text-4xl">
                🌽
              </div>

              <h3 className="font-semibold text-lg">
                {p.name}
              </h3>

              <p className="text-green-700 font-bold mt-1">
                ₹{p.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
