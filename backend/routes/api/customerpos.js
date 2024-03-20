const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CustomerPO = mongoose.model('CustomerPO');

// POST /api/customerpos/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const customerPONo = inputs.customerPONo;
    const customerPODate = inputs.customerPODate;
    const customer = inputs.customer;
    const customerRFQ = inputs.customerRFQ;
    const customerPOShipTerms = inputs.customerPOShipTerms;
    const customerPOPayTerms = inputs.customerPOPayTerms;
    const parts = inputs.parts;

    // saving customer PO with all fields
    const customerPO = new CustomerPO({
        customerPONo: customerPONo,
        customerPODate: customerPODate,
        customer: customer,
        customerRFQ: customerRFQ,
        customerContact: customerContact,
        customerPOShipTerms: customerPOShipTerms,
        customerPOPayTerms: customerPOPayTerms,
        parts: parts
    });

    // saving customer PO to database
    const savedCustomerPO = await customerPO.save();

    // returning the customer PO to the frontend
    return res.json(savedCustomerPO);
});

module.exports = router;
