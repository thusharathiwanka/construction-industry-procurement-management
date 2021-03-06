const router = require("express").Router();

router.use("/officers", require("./procurement.officer.routes"));
router.use("/sitemanagers", require("./site.manager.routes"));
router.use("/suppliers", require("./supplier.routes"));
router.use("/suppliers/services", require("./service.routes"));
router.use("/users", require("./common.routes"));
router.use("/orders", require("./order.routes"));
router.use("/reports", require("./report.routes"));
router.use("/sites", require("./site.routes"));
router.use("/materials", require("./material.routes"));
router.use("/inventory", require("./inventory.routes"));

module.exports = router;
