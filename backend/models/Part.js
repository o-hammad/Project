const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partSchema = new Schema({
    customerRFQLI: {
        type: Number,
    },
    customerRFQPN: {
        type: String,
    },
    customerRFQDesc: {
        type: String,
    },
    customerRFQQty: {
        type: Number,
    },
    customerRFQUoM: {
        type: String,
    },
    customerRFQNote: {
        type: String,
    },
    vendorQuotePN: {
        type: String,
    },
    vendorQuoteUnitPrice: {
        type: Number,
    },
    vendorQuoteQty: {
        type: Number,
    },
    vendorQuoteUoM: {
        type: Number,
    },
    vendorQuoteCond: {
        type: String,
    },
    vendorQuoteLeadTime: {
        type: Number,
    },
    vendorQuoteTrace: {
        type: String,
    },
    vendorQuoteTagInfo: {
        type: String,
    },
    vendorQuoteSchedB: {
        type: String,
    },
    vendorQuoteRemarks: {
        type: String,
    },
    PROSECQuoteQty: {
        type: Number,
    },
    PROSECQuoteUnitPrice: {
        type: Number,
    },
    PROSECQuoteUnitPrice: {
        type: Number,
    },
    PROSECQuoteNotes: {
        type: String,
    },
    CustomerPOQty: {
        type: Number,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Part', partSchema);