import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function AdminDashboard({ setIsAdmin }) {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    inStock: true,
  });

  // 🔐 Logout function (ADMIN ONLY)
  function logout() {
    setIsAdmin(false);
  }

  // Load products on page load
  useEffect(() => {
    loadProducts();
  }, []);

  function loadProducts() {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function submit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
      }),
    }).then(() => {
      setForm({ name: "", price: "", category: "", inStock: true });
      loadProducts();
    });
  }

  function remove(id) {
    if (!confirm("Delete this product?")) return;

    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    }).then(() => loadProducts());
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>

        <div className="flex gap-3">
          <Link
            to="/admin/orders"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            View Orders
          </Link>
          <Link
            to="/admin/leads"
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            View Leads
          </Link>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>


      {/* ➕ Add Product Form */}
      <form
        onSubmit={submit}
        className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"
      >
        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button className="bg-green-600 text-white rounded hover:bg-green-700">
          Add Product
        </button>
      </form>

      {/* 📦 Product List */}
      <div className="bg-white rounded shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-t">
                <td className="p-2">{p.name}</td>
                <td className="p-2">₹{p.price}</td>
                <td className="p-2">{p.category}</td>
                <td className="p-2">
                  <button
                    onClick={() => remove(p._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="p-4 text-center text-gray-500"
                >
                  No products
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
