const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prosecInvoicePLSchema = new Schema({
    prosecInvoiceNo: {
        type: String,
    },
    prosecInvoiceDate: {
        type: String,
    },
    customerPONo: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerPO'
    },
    prosecInvoicePayTerms: {
        type: String,
    },
    prosecPLData: {
        type: String,
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('ProsecInvoicePL', prosecInvoicePLSchema);