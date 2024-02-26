const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vendor = mongoose.model('Vendor');

// POST /api/vendors/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const vendorName = inputs.vendorName;
    const vendorStreetAddress = inputs.officeStreetAddress;
    const vendorCity = inputs.vendorCity;
    const vendorState = inputs.vendorState;
    const vendorZip = inputs.vendorZip;
    const vendorCountry = inputs.vendorCountry;

    // saving vendor with all fields
    const vendor = new Vendor({
        vendorName: vendorName,
        vendorStreetAddress: vendorStreetAddress,
        vendorCity: vendorCity,
        vendorState: vendorState,
        vendorZip: vendorZip,
        vendorCountry: vendorCountry,
    });

    // saving vendor to database
    const savedVendor = await vendor.save();

    // returning the vendor to the frontend
    return res.json(savedVendor);
});

module.exports = router;
