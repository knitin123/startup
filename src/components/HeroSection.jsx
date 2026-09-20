import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
  "https://images.unsplash.com/photo-1598373182133-52452f7691ef",
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // 🔁 Auto image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-yellow-100 to-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-3 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
            🌱 100% Farm Fresh
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Gaon Se Seedha <br />
            <span className="text-green-700">
              Shuddh Makki Products
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Fresh makki ka aata, boiled corn aur desi products —
            directly farmers aur local chakki se aapke ghar tak.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* SHOP NOW */}
            <button
              onClick={() => navigate("/products")}
              className="bg-green-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow"
            >
              Shop Now 🌽
            </button>

            {/* STORY */}
            <button
              onClick={() =>
                document
                  .getElementById("brand-story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-green-700 text-green-700 px-7 py-3 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition"
            >
              Know Our Story
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative">
          <img
            src={images[index]}
            alt="Makki products"
            className="rounded-2xl shadow-2xl w-full h-[360px] object-cover transition-all duration-700"
          />

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === index ? "bg-green-700" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
