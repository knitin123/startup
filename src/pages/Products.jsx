import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  // ADD TO CART (LOGIC UNCHANGED)
  function add(p) {
    setCart((c) => {
      const found = c.find((x) => x._id === p._id);
      return found
        ? c.map((x) =>
            x._id === p._id ? { ...x, qty: x.qty + 1 } : x
          )
        : [...c, { ...p, qty: 1 }];
    });
  }

  // STATES
  if (loading) {
    return (
      <div className="p-6 text-gray-600">
        Loading products…
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">
        Our Products 🌽
      </h2>

      {products.length === 0 ? (
        <p className="text-gray-600">
          No products available. Add from admin panel.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              onAdd={add}
            />
          ))}
        </div>
      )}
    </div>
  );
}
