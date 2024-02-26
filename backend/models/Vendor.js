const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    vendorName: {
        type: String,
    },
    vendorStreetAddress: {
        type: String,
    },
    vendorCity: {
        type: String,
    },
    vendorState: {
        type: String,
    },
    vendorZip: {
        type: String,
    },
    vendorCountry: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Vendor', vendorSchema);