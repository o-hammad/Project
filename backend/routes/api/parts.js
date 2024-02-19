const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Part = mongoose.model('Part');

// POST /api/parts/create
router.post('/create', async (req, res, next) => {
    // saving fields from request
    const inputs = req.body;
    const customerRFQLI = inputs.customerRFQLI;
    const customerRFQPN = inputs.customerRFQPN;
    const customerRFQDesc = inputs.customerRFQDesc;
    const customerRFQQty = inputs.customerRFQQty;
    const customerRFQUoM = inputs.customerRFQUoM;
    const customerRFQNote = inputs.customerRFQNote;
    const vendorQuotePN = inputs.vendorQuotePN;
    const vendorQuoteUnitPrice = inputs.vendorQuoteUnitPrice;
    const vendorQuoteQty = inputs.vendorQuoteQty;
    const vendorQuoteUoM = inputs.vendorQuoteUoM;
    const vendorQuoteCond = inputs.vendorQuoteCond;
    const vendorQuoteLeadTime = inputs.vendorQuoteLeadTime;
    const vendorQuoteTrace = inputs.vendorQuoteTrace;
    const vendorQuoteTagInfo = inputs.vendorQuoteTagInfo;
    const vendorQuoteSchedB = inputs.vendorQuoteSchedB;
    const vendorQuoteRemarks = inputs.vendorQuoteRemarks;
    const PROSECQuoteQty = inputs.PROSECQuoteQty;
    const PROSECQuoteUnitPrice = inputs.PROSECQuoteUnitPrice;
    const PROSECQuoteNotes = inputs.PROSECQuoteNotes;
    const CustomerPOQty = inputs.CustomerPOQty;

    // saving part with all fields
    const part = new Part({
        customerRFQLI: customerRFQLI, 
        customerRFQPN: customerRFQPN,
        customerRFQQty: customerRFQQty,
        customerRFQDesc: customerRFQDesc,
        customerRFQUoM: customerRFQUoM,
        customerRFQNote: customerRFQNote,
        vendorQuotePN: vendorQuotePN,
        vendorQuoteUnitPrice: vendorQuoteUnitPrice,
        vendorQuoteQty: vendorQuoteQty,
        vendorQuoteUoM: vendorQuoteUoM,
        vendorQuoteCond: vendorQuoteCond,
        vendorQuoteLeadTime: vendorQuoteLeadTime,
        vendorQuoteTrace: vendorQuoteTrace,
        vendorQuoteTagInfo: vendorQuoteTagInfo,
        vendorQuoteSchedB: vendorQuoteSchedB,
        vendorQuoteRemarks: vendorQuoteRemarks,
        PROSECQuoteQty: PROSECQuoteQty,
        PROSECQuoteUnitPrice: PROSECQuoteUnitPrice,
        PROSECQuoteNotes: PROSECQuoteNotes,
        CustomerPOQty: CustomerPOQty
    });

    const savedPart = await part.save();

    return res.json(savedPart);
});

module.exports = router;
