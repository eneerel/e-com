const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "sofa",
        "chair",
        "waiting",
        "entryway",
        "shoe-cabinet",
      ],
    },

    categoryName: {
      type: String,
      required: true,
    },

    seats: {
      type: Number,
      default: null,
    },

    style: {
      type: String,
      enum: [
        "modern",
        "classic",
        "chesterfield",
        "minimal",
        "luxury",
      ],
      default: "modern",
    },

    styleName: {
      type: String,
      default: "",
    },

    usage: {
      type: [String],
      default: [],
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    colors: {
      type: [String],
      default: [],
    },

    materials: {
      type: [String],
      default: [],
    },

    customizable: {
      type: Boolean,
      default: false,
    },

    description: {
      type: String,
      default: "",
    },

    dimensions: {
      length: {
        type: String,
        default: "",
      },

      width: {
        type: String,
        default: "",
      },

      corner: {
        type: String,
        default: "",
      },

      seatHeight: {
        type: String,
        default: "",
      },
    },

    images: {
      type: [String],
      default: [],
    },

    featured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;