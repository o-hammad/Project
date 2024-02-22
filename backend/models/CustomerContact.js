const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerContactSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
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

module.exports = mongoose.model('CustomerContact', customerContactSchema);