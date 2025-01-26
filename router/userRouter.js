//external imports
const express = require("express");
const router = express.Router();
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
//users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
