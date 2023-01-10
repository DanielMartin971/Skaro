// start express routes
const router = require("express").Router();

// import routes
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
// use routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// export router
module.exports = router;
