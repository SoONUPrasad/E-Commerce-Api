const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productController");

// !Creating routes
router.get("/", productsController.products);

router.post("/create", productsController.create);

router.delete("/:productID", productsController.delete);

router.post("/:productID/update_quantity/", productsController.updateQunatity);

module.exports = router;
