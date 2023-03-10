const router = require("express").Router();
const { Employee } = require("../../models");
const bcrypt = require("bcrypt");
// This is a post for login, checking information
router.post("/login", async (req, res) => {
  try {
    //Leave userData for now
    const userData = await Employee.findOne({
      where: { email: req.body.email },
    });

    // This checks if the userdata is the correct one for the email or password
    // If incorrect, it shoots the err msg
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // const validPassword = await userData.checkPassword(req.body.password);
    // changed to include bcrypt 'checkPassword' undefined

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    // If password is incorrect, it shoots err msg
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }

    // This will save the information of the login and change to true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// When logged out, it destroys the logged in sesh
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// route to create a new user

router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  var usr = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
  };
  created_user = await Employee.create(usr);
  req.session.save(() => {
    req.session.user_id = created_user.id;
    req.session.logged_in = true;

    res.json({ user: created_user, message: "You are now logged in!" });
  });
});

module.exports = router;
