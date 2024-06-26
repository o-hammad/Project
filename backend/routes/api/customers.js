const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer');
const { restoreUser } = require('../../config/passport');

// POST /api/customers/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const officeName = inputs.officeName;
    const officeStreetAddress = inputs.officeStreetAddress;
    const officeCity = inputs.officeCity;
    const officeState = inputs.officeState;  
    const officeZip = inputs.officeZip;
    const officeCountry = inputs.officeCountry;
    const shipToName = inputs.shipToName;
    const shipToStreetAddress = inputs.shipToStreetAddress;
    const shipToCity = inputs.shipToCity;
    const shipToState = inputs.shipToState;
    const shipToZip = inputs.shipToZip;
    const shipToCountry = inputs.shipToCountry;
        
    // saving customer with all fields
    const customer = new Customer({
        officeName: officeName,
        officeStreetAddress: officeStreetAddress,
        officeCity: officeCity,
        officeState: officeState,
        officeZip: officeZip,
        officeCountry: officeCountry,
        shipToName: shipToName,
        shipToStreetAddress: shipToStreetAddress,
        shipToCity: shipToCity,
        shipToState: shipToState,
        shipToZip: shipToZip,
        shipToCountry: shipToCountry
    });

    // saving customer to database
    const savedCustomer = await customer.save();

    // returning the customer to the frontend
    return res.json(savedCustomer);
});

/* GET customer listing. */
router.get('/', restoreUser, async (req, res) => {
    try {
        const customers = await Customer.find({});
        const customerList = {};

        customers.forEach((customer) => {
            const customerName = customer.officeName;

            customerList[customer._id] = {
                _id: customer._id,
                customer: customerName
            }
        });

        // response.customerrfqs = rfqsList;
        return res.json(customerList);
    }
    catch (err) {
        return res.json([]);
    }
});

module.exports = router;
