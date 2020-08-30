const express = require("express");
const router = express.Router();
const controller = require("../controllers/garage_controller");

/**
 *  Retrieve all garages (PLEASE DON'T USE THIS ROUTE BECAUSE EVERYTHING WILL BURN!!)
 * */
router.get("/", controller.getGarages);

/**
 *  Retrieve garages in specified location
 * */
router.get("/:location", controller.getGaragesByLocation);

module.exports = router;
