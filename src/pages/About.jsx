import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-green-700">GaonKiMakki</span> 🌽
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            GaonKiMakki is not just a food brand — it’s an effort to bring
            village-made, honest makki products directly to Indian homes.
          </p>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              How It All Started
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              GaonKiMakki started when we noticed a simple problem — farmers
              were selling good-quality makki at low prices, while customers
              were buying poor-quality flour at higher prices.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We decided to remove middlemen and connect farmers, local
              chakkis, and customers directly — ensuring fairness, freshness,
              and transparency.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow">
            <p className="text-lg font-semibold mb-2">
              Our Belief
            </p>
            <p className="text-gray-700">
              “Real food should come from real villages — not factories.”
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow">
              🌾
              <h3 className="font-semibold mt-3">
                Sourcing
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Makki directly from trusted farmers
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              ⚙️
              <h3 className="font-semibold mt-3">
                Local Chakki
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Clean grinding in local chakkis
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              📦
              <h3 className="font-semibold mt-3">
                Fresh Packing
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Hygienic and careful packaging
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              🚚
              <h3 className="font-semibold mt-3">
                Direct Delivery
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Delivered fresh to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FARMER FIRST */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Farmer First Promise 🧑‍🌾
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Farmers are the backbone of GaonKiMakki. We ensure fair pricing,
              direct buying, and long-term partnerships with local growers.
            </p>

            <p className="text-gray-700 leading-relaxed">
              When you buy from us, you support rural livelihoods and honest
              agriculture.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <ul className="space-y-3 text-gray-700">
              <li>✅ No middlemen</li>
              <li>✅ Fair farmer pricing</li>
              <li>✅ Transparent sourcing</li>
              <li>✅ Local employment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Taste the Difference 🌽
        </h2>

        <p className="mb-6">
          Experience fresh, village-made makki products today.
        </p>

        <Link
          to="/products"
          className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Explore Products
        </Link>
      </section>
    </div>
  );
}
