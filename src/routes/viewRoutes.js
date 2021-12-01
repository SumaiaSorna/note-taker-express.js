const { Router } = require("express");
const { renderHome, renderNotes } = require("../controllers/view");

const router = Router();

router.get("/", renderHome);
router.get("/notes", renderNotes);

module.exports = router;
