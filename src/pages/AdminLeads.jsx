import { useEffect, useState } from "react";

const STATUS_CONFIG = {
  New:        { color: "bg-blue-100 text-blue-800",   label: "New" },
  Contacted:  { color: "bg-yellow-100 text-yellow-800", label: "Contacted" },
  "Deal Done":{ color: "bg-green-100 text-green-800", label: "Deal Done" },
  Rejected:   { color: "bg-red-100 text-red-800",     label: "Rejected" },
};

const NEXT_ACTIONS = {
  New:        ["Contacted", "Rejected"],
  Contacted:  ["Deal Done", "Rejected"],
  "Deal Done":[],
  Rejected:   ["Contacted"],
};

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadLeads();
  }, []);

  function loadLeads() {
    fetch("http://localhost:5000/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  async function updateStatus(id, status) {
    setUpdating(id);
    try {
      const res = await fetch(`http://localhost:5000/api/leads/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setLeads((prev) => prev.map((l) => (l._id === id ? updated : l)));
    } catch {
      alert("Update failed");
    } finally {
      setUpdating(null);
    }
  }

  const counts = leads.reduce((acc, l) => {
    acc[l.status || "New"] = (acc[l.status || "New"] || 0) + 1;
    return acc;
  }, {});

  const filtered =
    filter === "All" ? leads : leads.filter((l) => (l.status || "New") === filter);

  if (loading) {
    return <div className="max-w-5xl mx-auto p-6 text-gray-500">Loading leads…</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Farmer Leads Pipeline</h2>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {["New", "Contacted", "Deal Done", "Rejected"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(filter === s ? "All" : s)}
            className={`rounded-xl p-4 text-left transition-all border-2 ${
              filter === s ? "border-gray-400" : "border-transparent"
            } ${STATUS_CONFIG[s].color}`}
          >
            <p className="text-2xl font-extrabold">{counts[s] || 0}</p>
            <p className="text-sm font-medium">{s}</p>
          </button>
        ))}
      </div>

      {/* TABLE */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 py-10 text-center">Koi lead nahi</p>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Crop</th>
                <th className="px-4 py-3">Qty (qtl)</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => {
                const status = l.status || "New";
                const cfg = STATUS_CONFIG[status];
                const actions = NEXT_ACTIONS[status];
                return (
                  <tr key={l._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{l.name}</td>
                    <td className="px-4 py-3">
                      <a href={`tel:${l.phone}`} className="text-blue-600 hover:underline">
                        {l.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3">{l.location}</td>
                    <td className="px-4 py-3">{l.crop}</td>
                    <td className="px-4 py-3">{l.quantity}</td>
                    <td className="px-4 py-3 text-gray-400">
                      {new Date(l.createdAt).toLocaleDateString("en-IN")}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${cfg.color}`}>
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 flex-wrap">
                        {actions.map((a) => (
                          <button
                            key={a}
                            disabled={updating === l._id}
                            onClick={() => updateStatus(l._id, a)}
                            className={`text-xs px-2 py-1 rounded font-medium transition-opacity ${
                              updating === l._id ? "opacity-50 cursor-not-allowed" : ""
                            } ${
                              a === "Deal Done"
                                ? "bg-green-600 text-white hover:bg-green-700"
                                : a === "Rejected"
                                ? "bg-red-100 text-red-700 hover:bg-red-200"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            }`}
                          >
                            {updating === l._id ? "..." : a}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
