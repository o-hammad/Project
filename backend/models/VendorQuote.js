const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const partsSchema = mongoose.model('Part');

const vendorQuoteSchema = new Schema({
    vendorName: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    vendorQuoteNo: {
        type: String,
    },
    vendorQuoteDate: {
        type: String,
    },
    prosecRFQNo: {
        type: Schema.Types.ObjectId,
        ref: 'ProsecRFQ'
    },
    vendorContact: {
        type: Schema.Types.ObjectId,
        ref: 'VendorContact'
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('VendorQuote', vendorQuoteSchema);