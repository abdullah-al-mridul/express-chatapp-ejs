//external imports
const express = require("express");
const router = express.Router();
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

//login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
