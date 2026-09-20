import React, { useState } from "react";

export default function SellWithUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    crop: "Makki",
    quantity: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit lead");
      }

      alert("Dhanyavaad! Hamari team aapse jald hi sampark karegi.");

      setForm({
        name: "",
        phone: "",
        location: "",
        crop: "Makki",
        quantity: "",
      });
    } catch (err) {
      alert("Kuch problem aayi. Kripya thodi der baad try karein.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="bg-green-100 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">
            Mandi ki bheed se mukti paaiye
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Apni fasal ko ek hi buyer tak simit na rakhein.
            GaonKiMakki ke saath kai buyers tak pahunch paaiye.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Kaam kaise karta hai
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">
                1️⃣ Fasal list karein
              </h3>
              <p className="text-gray-600">
                Apni makki ka type, quantity aur location batayein.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">
                2️⃣ Buyers sampark karte hain
              </h3>
              <p className="text-gray-600">
                Dukandar, mill aur industry aapse seedha baat karti hai.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">
                3️⃣ Best offer choose karein
              </h3>
              <p className="text-gray-600">
                Behtar daam, aasaan pickup — faisla aapka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT MESSAGE */}
      <section className="bg-yellow-100 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-2">
            Aap akela nahi hain
          </h3>
          <p className="text-gray-700">
            GaonKiMakki ke verified agents (dalal)
            fasal dekhne, tolne aur deal me madad karte hain —
            sab kuch transparent tareeke se.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-14 px-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-center">
            Free me apni fasal list karein
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Aapka naam"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="text"
              name="location"
              placeholder="Gaon / District"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />

            <input
              type="text"
              name="quantity"
              placeholder="Approx quantity (quintal)"
              value={form.quantity}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-2 rounded ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
            >
              {loading ? "Submitting..." : "Fasal list karein"}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            ✔ Koi listing charge nahi  
            ✔ Aap rate decide karte hain  
            ✔ Deal aapki marzi se hoti hai
          </p>
        </div>
      </section>
    </div>
  );
}
