const express = require("express");
const router = express.Router();
const { aggregateController } = require("../controllers");

router.route("/aggregate").post(aggregateController.postFunction);

module.exports = router;
