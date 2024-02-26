const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const VendorQuote = mongoose.model('VendorQuote');

// POST /api/vendorquotes/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const vendorName = inputs.vendorName;
    const vendorQuoteNo = inputs.vendorQuoteNo;
    const vendorQuoteDate = inputs.vendorQuoteDate;
    const prosecRFQNo = inputs.prosecRFQNo;
    const vendorContact = inputs.vendorContact
    const parts = inputs.parts;

    // saving vendor quote with all fields
    const vendorQuote = new VendorQuote({
        vendorName: vendorName,
        vendorQuoteNo: vendorQuoteNo,
        vendorQuoteDate: vendorQuoteDate,
        prosecRFQNo: prosecRFQNo,
        vendorContact: vendorContact,
        parts: parts
    });

    // saving vendor quote to database
    const savedVendorQuote = await vendorQuote.save();

    // returning the vendor quote to the frontend
    return res.json(savedVendorQuote);
});

module.exports = router;