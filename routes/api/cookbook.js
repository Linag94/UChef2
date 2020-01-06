const router = require("express").Router();
const cookbookController = require("../../controllers/cookbookController");


// Matches with "/api/cookbook/:id"
router
  .route("/:id")
  .get(cookbookController.findById)



module.exports = router;
