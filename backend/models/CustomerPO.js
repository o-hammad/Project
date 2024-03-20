const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const partsSchema = mongoose.model('Part');

const customerPOSchema = new Schema({
    customerPONo: {
        type: String,
    },
    customerPODate: {
        type: String,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    customerRFQ: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerRFQ'
    },
    customerPOShipTerms: {
        type: String,
    },
    customerPOPayTerms: {
        type: String,
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('CustomerPO', customerPOSchema);