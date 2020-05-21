var express = require("express");
var router = express.Router();

const customerController = require("../controllers/customerController");
const addressController = require("../controllers/AddressController");

/* GET home page. */
router.get("/cust_list", customerController.get_cust_list);
router.get("/:id/addresses", addressController.get_addresses);
router.post("/add_cust", customerController.add_cust);
router.post("/add_address", addressController.add_address);

module.exports = router;
