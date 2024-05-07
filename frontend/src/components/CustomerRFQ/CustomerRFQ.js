import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRFQs } from "../../store/customerrfq";
import './CustomerRFQ.css';
import { fetchCustomers } from "../../store/customer";
import { fetchCustomerContacts } from "../../store/customercontact"


function CustomerRFQ() {
    const dispatch = useDispatch();
    const rfqs = useSelector(state => state.customerrfqs);
    const customers = useSelector(state => state.customers);
    const customerContacts = useSelector(state => state.customercontacts);

    useEffect(() => {
        dispatch(fetchRFQs());
        dispatch(fetchCustomers());
        dispatch(fetchCustomerContacts())
    }, [dispatch])

    let rfqList = Object.values(rfqs);
    let customerList = Object.values(customers);
    let customerContactList = Object.values(customerContacts);

    return (
        <div className="customer-rfq-table-container">
            <table className="customer-rfq-table">
                <thead>
                    <tr>
                        <th>RFQ ID</th>
                        <th>Customer</th>
                        <th>Customer RFQ No</th>
                        <th>Customer Contact</th>
                        <th>Customer Contact Email</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {Object.values(rfqs).map((rfq, index) => (
                        <tr key={index}>
                            <td>{rfq._id}</td>
                            <td>{customers[rfq.customer]?.customer}</td>
                            <td>{rfq.customerRFQNo}</td>
                            <td>{customerContacts[rfq.customerContact]?.contactName}</td>
                            <td>{customerContacts[rfq.customerContact]?.contactEmail}</td>
                            {/* Add more table cells for additional RFQ properties */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerRFQ;