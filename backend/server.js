const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/admin");
const ordersRoute = require("./routes/orders");
const leadsRoute = require("./routes/leads"); // ✅ NEW
const authRoutes = require("./routes/auth");
console.log("ENV CHECK ADMIN_PHONES =", process.env.ADMIN_PHONES);



require("dotenv").config({ path: __dirname + "/.env" });


const app = express();

app.use(cors());
app.use(express.json());

// EXISTING ROUTES (UNCHANGED)
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", ordersRoute);
app.use("/api/auth", authRoutes);


// 🌾 SELL WITH US – LEADS ROUTE
app.use("/api/leads", leadsRoute);

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("Mongo error ❌", err));

// test route
app.get("/", (req, res) => {
  res.send("GaonKiMakki Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
