const { Router } = require("express");

const router = Router();

router.use("/api", apiRoutes);

router.module.exports = router;
