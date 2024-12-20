const authController = require("../controller/authController.js");
const isLoggedIn = require("../middleware/guest.js");
function initRoutes(app) {
  app.get("/login", authController().signin);
  app.post("/login", authController().postSignin);
  app.get("/", authController().signup);
  app.post("/signup", authController().postSignup);
  app.post("/logout", authController().logout);
  app.get("/reset", authController().reset);
  app.post("/reset", authController().resetPassword);
  app.get("/home", isLoggedIn, authController().home);
}
module.exports = initRoutes;
