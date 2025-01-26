//external imports
const express = require("express");
const router = express.Router();
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
//inbox page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
