import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "COD",
  });

  const total = cart.reduce(
    (s, x) => s + x.price * x.qty,
    0
  );

  function placeOrder() {
    // Basic validation
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all delivery details");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    // ✅ CORRECT PAYLOAD STRUCTURE
    const orderData = {
      items: cart.map((c) => ({
        name: c.name,
        price: c.price,
        qty: c.qty,
      })),

      total,

      customer: {
        name: form.name,
        phone: form.phone,
        address: form.address,
      },

      payment: form.payment,
    };

    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Order failed");
        return res.json();
      })
      .then((savedOrder) => {
        // Clear cart
        setCart([]);

        // Navigate to receipt page with full order
        navigate("/order-success", {
          state: { order: savedOrder },
        });
      })
      .catch(() => {
        alert("❌ Failed to place order. Try again.");
      });
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty. Please add products before checkout.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CUSTOMER DETAILS */}
          <div className="bg-white rounded shadow p-5">
            <h3 className="font-bold mb-3">
              Delivery Details
            </h3>

            <input
              placeholder="Full Name"
              className="border w-full px-3 py-2 mb-3 rounded"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              className="border w-full px-3 py-2 mb-3 rounded"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <textarea
              placeholder="Delivery Address"
              className="border w-full px-3 py-2 mb-3 rounded"
              rows={3}
              value={form.address}
              onChange={(e) =>
                setForm({
                  ...form,
                  address: e.target.value,
                })
              }
            />

            <div className="mt-3">
              <p className="font-medium mb-1">
                Payment Method
              </p>

              <label className="block">
                <input
                  type="radio"
                  checked={form.payment === "COD"}
                  onChange={() =>
                    setForm({
                      ...form,
                      payment: "COD",
                    })
                  }
                />{" "}
                Cash on Delivery
              </label>

              <label className="block mt-1">
                <input
                  type="radio"
                  checked={form.payment === "ONLINE"}
                  onChange={() =>
                    setForm({
                      ...form,
                      payment: "ONLINE",
                    })
                  }
                />{" "}
                Online Payment (coming soon)
              </label>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded shadow p-5">
            <h3 className="font-bold mb-3">
              Order Summary
            </h3>

            {cart.map((c) => (
              <div
                key={c._id}
                className="flex justify-between border-b py-2"
              >
                <span>
                  {c.name} × {c.qty}
                </span>
                <span>₹{c.price * c.qty}</span>
              </div>
            ))}

            <div className="flex justify-between font-bold text-lg mt-3">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={placeOrder}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
