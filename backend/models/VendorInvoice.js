const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorInvoiceSchema = new Schema({
    vendorInvoiceNo: {
        type: String,
    },
    vendorInvoiceDate: {
        type: String,
    },
    prosecPONo: {
        type: Schema.Types.ObjectId,
        ref: 'ProsecPO'
    },
    vendorInvoicePayTerms: {
        type: String,
    },
    vendorInvoiceDueDate: {
        type: String,
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('VendorInvoice', vendorInvoiceSchema);