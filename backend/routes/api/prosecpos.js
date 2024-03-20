const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ProsecPO = mongoose.model('ProsecPO');

// POST /api/prosecpos/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const prosecPONo = inputs.prosecPONo;
    const prosecPODate = inputs.prosecPODate;
    const customerPONo = inputs.customerPONo;
    const poShipDate = inputs.poShipDate;
    const poPayTerms = inputs.poPayTerms;
    const parts = inputs.parts;

    // saving prosec PO with all fields
    const prosecPO = new ProsecPO({
        prosecPONo: prosecPONo,
        prosecPODate: prosecPODate,
        customerPONo: customerPONo,
        poShipDate: poShipDate,
        poPayTerms: poPayTerms,
        parts: parts,
    });

    // saving prosec PO to database
    const savedProsecPO = await prosecPO.save();

    // returning the prosec PO to the frontend
    return res.json(savedProsecPO);
});

module.exports = router;