const router = require("express").Router();
const data = require("./data.js");

router.use("/data", data);

module.exports = router;
