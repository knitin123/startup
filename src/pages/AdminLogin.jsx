import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ setIsAdmin }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const sendOtp = async () => {
    const cleanPhone = phone.trim(); // 🔐 IMPORTANT

    if (!cleanPhone) {
      alert("Please enter mobile number");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: cleanPhone }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("OTP sent (check backend console)");
      setStep(2);
    } else {
      alert(data.message || "OTP send failed");
    }
  };

  const verifyOtp = async () => {
    const cleanPhone = phone.trim(); // 🔐 IMPORTANT

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: cleanPhone, otp }),
    });

    const data = await res.json();

    if (data.isAdmin) {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
      navigate("/admin/dashboard");
    } else {
      alert(data.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          Admin Login
        </h2>

        {step === 1 && (
          <>
            <input
              type="tel"
              placeholder="Admin mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-3 py-2 mb-4 rounded"
            />
            <button
              onClick={sendOtp}
              className="w-full bg-green-700 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border px-3 py-2 mb-4 rounded"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-green-700 text-white py-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
