const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    officeName: {
        type: String,
    },
    officeStreetAddress: {
        type: String,
    },
    officeCity: {
        type: String,
    },
    officeState: {
        type: String,
    },
    officeZip: {
        type: String,
    },
    officeCountry: {
        type: String,
    },
    shipToName: {
        type: String,
    },
    shipToStreetAddress: {
        type: String,
    },
    shipToCity: {
        type: String,
    },
    shipToState: {
        type: String,
    },
    shipToZip: {
        type: String,
    },
    shipToCountry: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);