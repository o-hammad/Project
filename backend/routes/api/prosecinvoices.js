const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ProsecInvoice = mongoose.model('ProsecInvoicePL');

// POST /api/prosecinvoices/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const prosecInvoiceNo = inputs.prosecInvoiceNo;
    const prosecInvoiceDate = inputs.prosecInvoiceDate;
    const customerPONo = inputs.customerPONo;
    const prosecInvoicePayTerm = inputs.prosecInvoicePayTerm;
    const prosecPLData = inputs.prosecPLData;
    const parts = inputs.parts;

    // saving prosec invoice with all fields
    const prosecInvoice = new ProsecInvoice({
        prosecInvoiceNo: prosecInvoiceNo,
        prosecInvoiceDate: prosecInvoiceDate,
        customerPONo: customerPONo,
        prosecInvoicePayTerm: prosecInvoicePayTerm,
        prosecPLData: prosecPLData,
        parts: parts
    });

    // saving prosec invoice to database
    const savedProsecInvoice = await prosecInvoice.save();

    // returning the prosec invoice to the frontend
    return res.json(savedProsecInvoice);
});

module.exports = router;
