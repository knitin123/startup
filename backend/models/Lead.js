const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    crop: {
      type: String,
      default: "Makki",
    },
    quantity: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Deal Done", "Rejected"],
      default: "New",
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("Lead", leadSchema);
