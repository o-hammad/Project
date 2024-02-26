const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const partsSchema = mongoose.model('Part');

const prosecRFQSchema = new Schema({
    prosecRFQNo: {
        type: String,
    },
    prosecRFQDate: {
        type: String,
    },
    customerRFQ: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerRFQ'
    },
    prosecRFQPaymentTerms: {
        type: String,
    },
    prosecRFQShippingTerms: {
        type: String,
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('ProsecRFQ', prosecRFQSchema);