const router = require("express").Router();
const instructionsController = require("../../controllers/instructionsController");

// Matches with "/api/instructions"
router.route("/")
  .get(instructionsController.findAll)
  .post(instructionsController.create);

// Matches with "/api/instructions/:id"
router
  .route("/:id")
  .get(instructionsController.findById)
  .put(instructionsController.update)
  .delete(instructionsController.remove);

module.exports = router;
