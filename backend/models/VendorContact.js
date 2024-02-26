const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorContactSchema = new Schema({
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    contactName: {
        type: String,
    },
    contactTel: {
        type: String,
    },
    contactEmail: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('VendorContact', vendorContactSchema);