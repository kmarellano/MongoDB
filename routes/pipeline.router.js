const { Router } = require("express");
const router = Router();
const { pipelineController } = require("../controllers");

router.route("/pipeline").post(pipelineController.runPipeline);

module.exports = router;
