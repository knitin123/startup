const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],

    total: {
      type: Number,
      required: true,
    },

    customer: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },

    payment: {
      type: String,
      enum: ["COD", "ONLINE"],
      default: "COD",
    },

    status: {
      type: String,
      enum: ["Pending", "Packed", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
