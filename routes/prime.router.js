const { Router } = require("express");
const router = Router();
const { primeController } = require("../controllers");

router.route("/prime").post(primeController.generateMockData);

module.exports = router;
