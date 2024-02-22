const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CustomerRFQ = mongoose.model('CustomerRFQ');

// POST /api/customerrfq/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const customer = inputs.customer;
    const customerRFQNo = inputs.customerRFQNo;
    const customerContact = inputs.customerContact;
    const receiptDate = inputs.receiptDate;
    const shippingTerms = inputs.shippingTerms;
    const parts = inputs.parts;

    // saving customer rfq with all fields
    const customerRFQ = new CustomerRFQ ({
        customer: customer,
        customerRFQNo: customerRFQNo,
        customerContact: customerContact,
        receiptDate: receiptDate,
        shippingTerms: shippingTerms,
        parts: parts
    });

    // saving customer rfq to database
    const savedCustomerRFQ = await customerRFQ.save();

    // returning the customer rfq to the frontend
    return res.json(savedCustomerRFQ);
});

module.exports = router;
