const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const VendorInvoice = mongoose.model('VendorInvoice');

// POST /api/vendorquotes/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const vendorInvoiceNo = inputs.vendorInvoiceNo;
    const vendorInvoiceDate = inputs.vendorInvoiceDate;
    const prosecPONo = inputs.prosecPONo;
    const vendorInvoicePayTerms = inputs.vendorInvoicePayTerms;
    const vendorInvoiceDueDate = inputs.vendorInvoiceDueDate;
    const parts = inputs.parts;

    // saving vendor invoice with all fields
    const vendorInvoice = new VendorInvoice({
        vendorInvoiceNo: vendorInvoiceNo,
        vendorInvoiceDate: vendorInvoiceDate,
        prosecPONo: prosecPONo,
        vendorInvoicePayTerms: vendorInvoicePayTerms,
        vendorInvoiceDueDate: vendorInvoiceDueDate,
        parts: parts,
    });

    // saving vendor invoice to database
    const savedVendorInvoice = await vendorInvoice.save();

    // returning the vendor invoice to the frontend
    return res.json(savedVendorInvoice);
});

module.exports = router;
