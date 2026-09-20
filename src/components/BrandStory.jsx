export default function BrandStory() {
  return (
    <section
      id="brand-story"
      className="bg-green-50 py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT STORY */}
        <div>
          <span className="text-green-700 font-semibold uppercase tracking-wide">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Why <span className="text-green-700">GaonKiMakki</span>? 🌽
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            GaonKiMakki was born from a simple but powerful belief —
            <b> real food should come from real villages, not factories.</b>
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We connect directly with farmers and local chakkis to bring
            you fresh makki atta and desi corn products — without
            middlemen, without shortcuts.
          </p>

          <p className="text-gray-700 leading-relaxed">
            When you buy from GaonKiMakki, you’re not just buying food —
            you’re supporting farmers, rural livelihoods, and honest
            nutrition.
          </p>
        </div>

        {/* RIGHT TRUST POINTS */}
        <div className="space-y-5">
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            🌾 <b className="block">Village Sourced</b>
            <p className="text-sm text-gray-600 mt-1">
              Makki grown in real Indian farms — seasonal and natural.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            🧑‍🌾 <b className="block">Farmer First</b>
            <p className="text-sm text-gray-600 mt-1">
              Direct sourcing ensures farmers earn fair value.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            🧼 <b className="block">Clean & Honest</b>
            <p className="text-sm text-gray-600 mt-1">
              Hygienic grinding, no chemicals, no compromise.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
