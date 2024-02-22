const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const partsSchema = mongoose.model('Part');

const customerRFQSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    customerRFQNo: {
        type: String,
    },
    customerContact: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerContact'
    },
    receiptDate: {
        type: String,
    },
    shippingTerms: {
        type: String,
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('CustomerRFQ', customerRFQSchema);