const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Our server was hit");
});

module.exports = router;
