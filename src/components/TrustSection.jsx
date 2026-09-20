export default function TrustSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-xl font-bold mb-2">
              Farm Fresh
            </h3>
            <p className="text-gray-600">
              Fresh makki products directly from village farms.
            </p>
          </div>

          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">🧑‍🌾</div>
            <h3 className="text-xl font-bold mb-2">
              Direct From Farmers
            </h3>
            <p className="text-gray-600">
              No middlemen. Supporting local farmers & chakki owners.
            </p>
          </div>

          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <div className="text-4xl mb-4">🧼</div>
            <h3 className="text-xl font-bold mb-2">
              Hygienic & Pure
            </h3>
            <p className="text-gray-600">
              Clean processing, safe packaging, quality guaranteed.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
