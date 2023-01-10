const router = require("express").Router();
const { Employee, Project } = require("../models");

const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      attributes: { exclude: ["password"] },
      order: [["lastName", "ASC"]],
    });
    const employees = employeeData.map((project) =>
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
  res.render("login", { shouldHideNav: true });
});

//create a signup route
router.get("/signup", (req, res) => {
  res.render("signup", { shouldHideNav: true });
});

router.get("/project", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  try {
    const projectData = await Project.findAll({});
    const projects = projectData.map((project) => project.get({ plain: true }));
    res.render("project", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/tasks", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("tasks");
});

router.get("/teams", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("teams");
});

module.exports = router;
