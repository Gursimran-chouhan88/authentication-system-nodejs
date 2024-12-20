const User = require("../models/user");
const passport = require("passport");
function authController() {
  return {
    // ************************************  SIGN IN SETUP  *********************************//
    signin(req, resp) {
      resp.render("auth/signin");
    },

    postSignin(req, resp, next) {
      const { username, password } = req.body;
      // Validate request
      if (!username || !password) {
        req.flash("error", "All fields are required");
        return resp.redirect("/login");
      }
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          req.flash("error", info.message);
          return next(err);
        }
        if (!user) {
          req.flash("error", info.message);
          return resp.redirect("/login");
        }
        req.logIn(user, (err) => {
          if (err) {
            req.flash("error", info.message);
            return next(err);
          }

          return resp.redirect("/home");
        });
      })(req, resp, next);
    },
    home(req, resp) {
      let name = req.user.fullname;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      resp.render("auth/home", { name: name });
    },
    // ******************************************   SIGNUP SETUP  ********************************//
    signup(req, resp) {
      resp.render("auth/signup");
    },
    postSignup(req, resp) {
      const { fullname, username, email, password } = req.body;
      console.log(req.body);
      if (!fullname || !username || !email || !password) {
        req.flash("error", "All fields are required");
        req.flash("fullname", fullname);
        req.flash("username", username);
        req.flash("email", email);
        return resp.redirect("/");
      }
      // Check if email exists
      User.exists({ email: email }, async (err, emailExists) => {
        if (err) {
          req.flash("error", "Something went wrong");
          return resp.redirect("/");
        }
        if (emailExists) {
          req.flash("error", "Email already taken");
          req.flash("fullname", fullname);
          req.flash("username", username);
          req.flash("email", email);
          return resp.redirect("/");
        } else {
          // Check if username exists
          User.exists({ username: username }, async (err, usernameExists) => {
            if (err) {
              req.flash("error", "Something went wrong");
              return resp.redirect("/");
            }
            if (usernameExists) {
              req.flash("error", "Username already taken");
              req.flash("fullname", fullname);
              req.flash("username", username);
              req.flash("email", email);
              return resp.redirect("/");
            } else {
              try {
                const user = new User({
                  fullname: req.body.fullname,
                  username: req.body.username,
                  email: req.body.email,
                });
                await User.register(user, req.body.password);
                return resp.redirect("/login");
              } catch (err) {
                req.flash("error", "Something went wrong");
                return resp.redirect("/");
              }
            }
          });
        }
      });
    },

    // *****************************************   RESET PASSWORD SETUP  *************************//
    reset(req, resp) {
      resp.render("auth/reset");
    },

    resetPassword(req, resp) {
      User.findByUsername(req.body.username, (err, user) => {
        if (err) {
          req.flash("error", "plz check your password");
        } else {
          user.changePassword(
            req.body.oldpassword,
            req.body.newpassword,
            function (err) {
              if (err) {
                return resp.redirect("/reset");
              } else {
                return resp.redirect("/login");
              }
            }
          );
        }
      });
    },
    // ************************************   LOGOUT   ********************************//
    logout(req, resp, next) {
      req.logout(function (err) {
        if (err) {
          return next(err);
        }
        return resp.redirect("/login");
      });
    },
  };
}
module.exports = authController;
