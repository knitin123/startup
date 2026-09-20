export default function WhyUs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Why GaonKiMakki?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Desi taste, imandaar daam, aur seedha kisaan se aapke ghar tak.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded border hover:shadow transition">
            <div className="text-4xl mb-3">🌽</div>
            <h3 className="font-semibold text-lg mb-2">
              Farmer Direct
            </h3>
            <p className="text-sm text-gray-600">
              Makki directly sourced from trusted local farmers.
              No middlemen, fair prices for everyone.
            </p>
          </div>

          <div className="p-6 rounded border hover:shadow transition">
            <div className="text-4xl mb-3">🪨</div>
            <h3 className="font-semibold text-lg mb-2">
              Freshly Ground
            </h3>
            <p className="text-sm text-gray-600">
              Stone-ground in small batches to preserve
              natural taste and nutrition.
            </p>
          </div>

          <div className="p-6 rounded border hover:shadow transition">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold text-lg mb-2">
              Reliable Delivery
            </h3>
            <p className="text-sm text-gray-600">
              Fast local delivery with Cash on Delivery
              and order status tracking.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
