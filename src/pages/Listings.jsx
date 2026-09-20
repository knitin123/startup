import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CROP_ICONS = {
  Makki: "🌽",
  Wheat: "🌾",
  Rice: "🍚",
  Bajra: "🌿",
  Jowar: "🌱",
};

const CROP_OPTIONS = ["All", "Makki", "Wheat", "Rice", "Bajra", "Jowar"];

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-5 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
      <div className="h-6 bg-gray-200 rounded w-2/3 mb-4" />
      <div className="h-3 bg-gray-100 rounded w-full mb-2" />
      <div className="h-3 bg-gray-100 rounded w-3/4" />
    </div>
  );
}

function ListingCard({ lead, index }) {
  const icon = CROP_ICONS[lead.crop] || "🌾";
  const date = new Date(lead.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Top color bar */}
      <div className="h-1.5 bg-gradient-to-r from-green-400 to-yellow-400" />

      <div className="p-5">
        {/* Crop badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
            {icon} {lead.crop}
          </span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <p className="text-3xl font-extrabold text-gray-900">
            {lead.quantity}
            <span className="text-base font-medium text-gray-500 ml-1">quintal</span>
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-4">
          <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {lead.location}
        </div>

        {/* CTA */}
        <Link
          to="/sell"
          className="block text-center w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          Mujhe Kharidna Hai
        </Link>
      </div>
    </div>
  );
}

export default function Listings() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cropFilter, setCropFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = leads.filter((l) => {
    const matchCrop = cropFilter === "All" || l.crop === cropFilter;
    const matchLoc = l.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchCrop && matchLoc;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-sm px-4 py-1 rounded-full mb-4 font-medium">
            🌽 Live Mandi Listings
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Seedha Kisaan Se Kharido
          </h1>
          <p className="mt-3 text-green-100 text-lg max-w-xl mx-auto">
            Verified farmers ke fresh stock — bilkul mandi ki tarah, par online aur transparent.
          </p>

          {/* Stats bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div>
              <p className="text-3xl font-bold">{leads.length}+</p>
              <p className="text-green-200 text-sm">Active Listings</p>
            </div>
            <div className="w-px bg-white/30 hidden md:block" />
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-green-200 text-sm">Verified Farmers</p>
            </div>
            <div className="w-px bg-white/30 hidden md:block" />
            <div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-green-200 text-sm">Commission</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="sticky top-[64px] z-30 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center">
          {/* Location search */}
          <div className="relative flex-1 min-w-[180px]">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Location dhundo..."
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Crop filter chips */}
          <div className="flex gap-2 flex-wrap">
            {CROP_OPTIONS.map((c) => (
              <button
                key={c}
                onClick={() => setCropFilter(c)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cropFilter === c
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-800"
                }`}
              >
                {CROP_ICONS[c] || ""} {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* LISTINGS GRID */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-6xl mb-4">🌾</p>
            <p className="text-xl font-semibold text-gray-700">Koi listing nahi mili</p>
            <p className="text-gray-500 mt-1">Filter change karein ya thodi der baad aayein</p>
            <Link
              to="/sell"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
            >
              Apni Fasal List Karein
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-5">
              {filtered.length} listing{filtered.length > 1 ? "s" : ""} mili
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((lead, i) => (
                <ListingCard key={lead._id} lead={lead} index={i} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* BOTTOM CTA */}
      <section className="bg-yellow-50 border-t py-12 px-4 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          Aap bhi kisaan hain?
        </h3>
        <p className="text-gray-600 mt-1 mb-5">
          Free mein apni fasal yahan list karein — hazaaron buyers dekhenge.
        </p>
        <Link
          to="/sell"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition shadow"
        >
          Abhi List Karein — Bilkul Free
        </Link>
      </section>
    </div>
  );
}
