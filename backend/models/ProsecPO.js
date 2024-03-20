const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prosecPOSchema = new Schema({
    prosecPONo: {
        type: String,
    },
    prosecPODate: {
        type: String,
    },
    customerPONo: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerPO'
    },
    poShipDate: {
        type: String,
    },
    poPayTerms: {
        type: String,
    },
    parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part', }]
}, {
    timestamps: true
});

module.exports = mongoose.model('ProsecPO', prosecPOSchema);