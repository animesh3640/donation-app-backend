const express = require("express");
const router = express();
const { createDonation,getDonations,getMessage } = require("../controllers/donation.controllers");

router.get("/donation", getDonations);
router.post("/donation", createDonation);
router.get("/thankyou", getMessage);

module.exports = router;