const mongoose = require("mongoose");

const DeliveryReport = mongoose.Schema({
    orderId:{type: mongoose.Schema.Types.ObjectId,
			ref: "orders"},
    item:{ type: String, required: true },
    quantity:{ type: String, required: true },
    description:{type: String, required: true},
    supplierId:{type: mongoose.Schema.Types.ObjectId,
			ref: "suppliers" }
})

const deliveryReport = mongoose.model("deliveryreport", DeliveryReport);

module.exports = deliveryReport;