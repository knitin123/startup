import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  function increase(id) {
    setCart((c) =>
      c.map((x) =>
        x._id === id ? { ...x, qty: x.qty + 1 } : x
      )
    );
  }

  function decrease(id) {
    setCart((c) =>
      c
        .map((x) =>
          x._id === id ? { ...x, qty: x.qty - 1 } : x
        )
        .filter((x) => x.qty > 0)
    );
  }

  function remove(id) {
    setCart((c) => c.filter((x) => x._id !== id));
  }

  const subtotal = cart.reduce(
    (s, x) => s + x.price * x.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty. Go to <b>Products</b> and add items 🌽
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CART ITEMS */}
          <div className="md:col-span-2 bg-white rounded shadow p-4">
            {cart.map((c) => (
              <div
                key={c._id}
                className="flex justify-between items-center border-b py-3"
              >
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-gray-600">
                    ₹{c.price} × {c.qty}
                  </p>

                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => decrease(c._id)}
                      className="px-2 border rounded"
                    >
                      −
                    </button>
                    <button
                      onClick={() => increase(c._id)}
                      className="px-2 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => remove(c._id)}
                      className="px-2 border text-red-600 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="font-bold">
                  ₹{c.price * c.qty}
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded shadow p-4 h-fit">
            <h3 className="font-bold mb-3">Order Summary</h3>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>₹0</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <Link
              to="/checkout"
              className="mt-4 block text-center w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
