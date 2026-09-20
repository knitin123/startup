export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col">
      
      {/* TEMP PLACEHOLDER (NO IMAGE YET) */}
      <div className="h-36 bg-yellow-100 rounded-xl mb-4 flex items-center justify-center text-xl font-bold text-yellow-800">
        {product.category || "Makki Product"}
      </div>

      <h3 className="font-semibold text-lg">
        {product.name}
      </h3>

      <p className="text-green-700 font-bold mt-1">
        ₹{product.price}
      </p>

      <button
        onClick={() => onAdd(product)}
        className="mt-auto bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
