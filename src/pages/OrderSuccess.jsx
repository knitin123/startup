import { useLocation, Link, Navigate } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();

  if (!state || !state.order) {
    return <Navigate to="/" />;
  }

  const order = state.order;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded shadow p-6">
        {/* HEADER */}
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          ✅ Order Confirmed
        </h2>

        <p className="text-gray-600 mb-4">
          Thank you for shopping with <b>GaonKiMakki</b>.  
          Your order has been received and is being processed.
        </p>

        {/* BASIC INFO */}
        <div className="text-sm space-y-1 mb-4">
          <p>
            <b>Order ID:</b> {order._id}
          </p>
          <p>
            <b>Status:</b>{" "}
            <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-xs">
              {order.status || "Pending"}
            </span>
          </p>
        </div>

        {/* CUSTOMER */}
        <div className="mb-4">
          <p className="font-semibold mb-1">Delivery Details</p>
          <p>
            <b>Name:</b> {order.customer?.name}
          </p>
          <p>
            <b>Phone:</b> {order.customer?.phone}
          </p>
          <p>
            <b>Address:</b> {order.customer?.address}
          </p>
        </div>

        <hr className="my-4" />

        {/* ITEMS */}
        <h3 className="font-semibold mb-2">Order Items</h3>

        {order.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between border-b py-2 text-sm"
          >
            <span>
              {item.name} × {item.qty}
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <div className="flex justify-between font-bold text-lg mt-3">
          <span>Total</span>
          <span>₹{order.total}</span>
        </div>

        {/* FOOTER CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            to="/products"
            className="bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border px-4 py-2 rounded text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
