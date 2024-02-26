const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ProsecRFQ = mongoose.model('ProsecRFQ');

// POST /api/prosecrfqs/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const prosecRFQNo = inputs.prosecRFQNo;
    const prosecRFQDate = inputs.prosecRFQDate;
    const customerRFQ = inputs.customerRFQ;
    const prosecRFQPaymentTerms = inputs.prosecRFQPaymentTerms;
    const prosecRFQShippingTerms = inputs.prosecRFQShippingTerms;
    const parts = inputs.parts;

    // saving prosec rfq with all fields
    const prosecRFQ = new ProsecRFQ({
        prosecRFQNo: prosecRFQNo,
        prosecRFQDate: prosecRFQDate,
        customerRFQ: customerRFQ,
        prosecRFQPaymentTerms: prosecRFQPaymentTerms,
        prosecRFQShippingTerms: prosecRFQShippingTerms,
        parts: parts
    });

    // saving prosec rfq to database
    const savedProsecRFQ = await prosecRFQ.save();

    // returning the prosec rfq to the frontend
    return res.json(savedProsecRFQ);
});

module.exports = router;
