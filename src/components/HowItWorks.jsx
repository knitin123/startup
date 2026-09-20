export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">
          How It Works
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Bas 3 simple steps — hum baaki sab sambhalte hain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded shadow-sm hover:shadow transition">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="font-semibold text-lg mb-2">
              Choose Products
            </h3>
            <p className="text-sm text-gray-600">
              Apni pasand ke makki products select karein —
              fresh aur natural.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm hover:shadow transition">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-semibold text-lg mb-2">
              Place Order
            </h3>
            <p className="text-sm text-gray-600">
              Simple checkout ke saath order place karein.
              Cash on Delivery available.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm hover:shadow transition">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold text-lg mb-2">
              We Deliver Fresh
            </h3>
            <p className="text-sm text-gray-600">
              Hum aapka order fresh pack karke
              seedha aapke ghar tak pahunchate hain.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
