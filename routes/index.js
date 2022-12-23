// start express routes
const router = require("express").Router();

// import routes
const homeRoutes = require("./homeRoutes");

// use routes
router.use("/", homeRoutes);

// export router
module.exports = router;
