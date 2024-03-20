const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prosecQuoteSchema = new Schema({
    prosecQuoteNo: {
        type: String,
    },
    prosecQuoteDate: {
        type: String,
    },
    customerRFQ: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerRFQ'
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('ProsecQuote', prosecQuoteSchema);