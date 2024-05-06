const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CustomerRFQ = mongoose.model('CustomerRFQ');
const { restoreUser } = require('../../config/passport');

// POST /api/customerrfqs/create
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


/* GET rfqs listing. */
router.get('/', restoreUser, async (req, res) => {
    try {
        const rfqs = await CustomerRFQ.find({});
        const rfqsList = {};
        const partsList = {};
        const response = {};

        rfqs.forEach((rfq) => {
            const partIds = [];
            const customer = rfq.customer;
            const customerRFQNo = rfq.customerRFQNo;
            const customerContact = rfq.customerContact;
            rfq.parts.forEach((part) => {
                partIds.push(part._id)
                partsList[part._id] = {
                    _id: part._id,
                }
            })

            rfqsList[rfq._id] = {
                _id: rfq._id,
                parts: partIds,
                customer: customer,
                customerRFQNo: customerRFQNo,
                customerContact: customerContact,
            }
        });

        // response.customerrfqs = rfqsList;
        return res.json(rfqsList);
    }
    catch (err) {
        return res.json([]);
    }
});

module.exports = router;
