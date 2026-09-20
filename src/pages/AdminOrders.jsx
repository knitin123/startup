import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  function loadOrders() {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  function StatusBadge({ status }) {
    const styles = {
      Pending: "bg-yellow-100 text-yellow-800",
      Packed: "bg-blue-100 text-blue-800",
      Delivered: "bg-green-100 text-green-800",
    };

    return (
      <span
        className={`text-xs px-2 py-1 rounded font-semibold ${
          styles[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status || "Pending"}
      </span>
    );
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-gray-500">
        Loading orders…
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Orders Management
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet</p>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <div
              key={o._id}
              className="bg-white border rounded-lg p-4 shadow-sm"
            >
              {/* HEADER */}
              <div className="flex flex-col md:flex-row justify-between gap-3">
                <div>
                  <p className="font-semibold">
                    {o.customer?.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {o.customer?.phone}
                  </p>
                  <p className="text-sm text-gray-700">
                    {o.customer?.address}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
                    ₹{o.total}
                  </p>
                  <StatusBadge status={o.status} />
                </div>
              </div>

              {/* ITEMS */}
              <div className="border-t mt-3 pt-2 text-sm text-gray-700">
                {(o.items || []).map((i, idx) => (
                  <p key={idx}>
                    {i.name} × {i.qty} — ₹
                    {i.price * i.qty}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
