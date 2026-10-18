const Product = require("../models/Product");

// ==============================
// GET ALL PRODUCTS
// GET /api/products
// ==============================

const getProducts = async (req, res) => {
  try {
    const {
      category,
      seats,
      style,
      color,
      minPrice,
      maxPrice,
      featured,
    } = req.query;

    const filter = {
      isActive: true,
    };

    // Category filter
    if (category) {
      filter.category = category;
    }

    // Seats filter
    if (seats) {
      filter.seats = Number(seats);
    }

    // Style filter
    if (style) {
      filter.style = style;
    }

    // Color filter
    if (color) {
      filter.colors = color;
    }

    // Price filter
    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    // Featured filter
    if (featured === "true") {
      filter.featured = true;
    }

    const products = await Product.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Products авахад алдаа гарлаа.",
      error: error.message,
    });
  }
};

// ==============================
// GET SINGLE PRODUCT
// GET /api/products/:id
// ==============================

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Бүтээгдэхүүн олдсонгүй.",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product авахад алдаа гарлаа.",
      error: error.message,
    });
  }
};

// ==============================
// CREATE PRODUCT
// POST /api/products
// ==============================

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Бүтээгдэхүүн амжилттай нэмэгдлээ.",
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Бүтээгдэхүүн нэмэхэд алдаа гарлаа.",
      error: error.message,
    });
  }
};

// ==============================
// UPDATE PRODUCT
// PUT /api/products/:id
// ==============================

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Бүтээгдэхүүн олдсонгүй.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Бүтээгдэхүүн шинэчлэгдлээ.",
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Бүтээгдэхүүн шинэчлэхэд алдаа гарлаа.",
      error: error.message,
    });
  }
};

// ==============================
// DELETE PRODUCT
// DELETE /api/products/:id
// ==============================

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Бүтээгдэхүүн олдсонгүй.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Бүтээгдэхүүн устгагдлаа.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Бүтээгдэхүүн устгахад алдаа гарлаа.",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};