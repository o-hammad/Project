const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ProsecQuote = mongoose.model('ProsecQuote');

// POST /api/prosecquotes/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const prosecQuoteNo = inputs.prosecQuoteNo;
    const prosecQuoteDate = inputs.prosecQuoteDate;
    const customerRFQ = inputs.customerRFQ;
    const parts = inputs.parts;

    // saving prosec quote with all fields
    const prosecQuote = new ProsecQuote({
        prosecQuoteNo: prosecQuoteNo,
        prosecQuoteDate: prosecQuoteDate,
        customerRFQ: customerRFQ,
        parts: parts
    });

    // saving prosec quote to database
    const savedProsecQuote = await prosecQuote.save();

    // returning the prosec rfq to the frontend
    return res.json(savedProsecQuote);
});

module.exports = router;
