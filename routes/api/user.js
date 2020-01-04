const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/signup"
router.route("/signup")
  .post(userController.create);

// Matches with "/api/user/authenticate"
router.route("/authenticate")
  .post(userController.authenticate);

// Matches with "/api/user"
router.route("/logout")
  .get(userController.logout);

// Matches with "/api/user"
router.route("/")
  .post(userController.login);

// Matches with "/api/user"
router.route("/:id")
  .put(userController.update)


// TO-DO: logout route (delete cookie and session - req.session.destroy)
module.exports = router;