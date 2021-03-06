const router = require("express").Router();

const {
	verifyProcurementManagerAuth,
} = require("../auth/procurement.manager.auth");
const SiteController = require("../controllers/site.controller");

router.post("/", verifyProcurementManagerAuth, SiteController.saveSite);

router.get("/", verifyProcurementManagerAuth, SiteController.getSites);

router.delete("/:id", verifyProcurementManagerAuth, SiteController.removeSite);

module.exports = router;
