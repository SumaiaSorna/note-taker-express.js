const { Router } = require("express");
const viewRoutes = require("./viewRoutes");

const router = Router();

// router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
