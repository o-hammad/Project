const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CustomerContact = mongoose.model('CustomerContact');
const { restoreUser } = require('../../config/passport');

// POST /api/customercontacts/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const customer = inputs.customer;
    const contactName = inputs.contactName;
    const contactTel = inputs.contactTel;
    const contactEmail = inputs.contactEmail;
   
    // saving customer contact with all fields
    const customerContact = new CustomerContact({
        customer: customer,
        contactName: contactName,
        contactTel: contactTel,
        contactEmail: contactEmail,
    });

    // saving customer contact to database
    const savedCustomerContact = await customerContact.save();

    // returning the customer contact to the frontend
    return res.json(savedCustomerContact);
});

/* GET customer contacts listing. */
router.get('/', restoreUser, async (req, res) => {
    try {
        const customerContact = await CustomerContact.find({});
        const customerContactList = {};

        customerContact.forEach((customerContact) => {
            const customerContactName = customerContact.contactName;
            const customerContactEmail = customerContact.contactEmail;

            customerContactList[customerContact._id] = {
                _id: customerContact._id,
                contactName: customerContactName,
                contactEmail: customerContactEmail
            }
        });

        return res.json(customerContactList);
    }
    catch (err) {
        return res.json([]);
    }
});

module.exports = router;
