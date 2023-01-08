const router = require("express").Router();
const { User } = require("../models");
const Employee = require("../models/Employee");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    const employees = Employee.Data.map((project) =>
      project.get({ plain: true })
    );
    res.render("homepage", {
      employees,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});


router.get("/project", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("project");
});


router.get("/tasks", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("tasks");
});


router.get("/teams", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("teams");
});

module.exports = router;
