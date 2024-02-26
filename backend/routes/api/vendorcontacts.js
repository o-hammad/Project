const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const VendorContact = mongoose.model('VendorContact');

// POST /api/vendorcontacts/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const vendor = inputs.vendor;
    const contactName = inputs.contactName;
    const contactTel = inputs.contactTel;
    const contactEmail = inputs.contactEmail;

    // saving vendor contact with all fields
    const vendorContact = new VendorContact({
        vendor: vendor,
        contactName: contactName,
        contactTel: contactTel,
        contactEmail: contactEmail,
    });

    // saving vendor contact to database
    const savedVendorContact = await vendorContact.save();

    // returning the vendor contact to the frontend
    return res.json(savedVendorContact);
});

module.exports = router;
