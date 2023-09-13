const { Router } = require("express");
const router = Router();
const { primeController } = require("../controllers");

router.route("/mock").post(primeController.generateMockData);
router.route("/prime").post(primeController.generatePrimeWithRelation);

module.exports = router;
