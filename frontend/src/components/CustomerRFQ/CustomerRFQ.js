import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRFQs } from "../../store/customerrfq";
import './CustomerRFQ.css';
import { fetchCustomers } from "../../store/customer";


function CustomerRFQ() {
    const dispatch = useDispatch();
    const rfqs = useSelector(state => state.customerrfqs);
    const customers = useSelector(state => state.customers);

    useEffect(() => {
        dispatch(fetchRFQs());
        dispatch(fetchCustomers())
    }, [dispatch])

    let rfqList = Object.values(rfqs);
    let customerList = Object.values(customers)

    return (
        <div className="customer-rfq-table-container">
            <table className="customer-rfq-table">
                <thead>
                    <tr>
                        <th>RFQ ID</th>
                        <th>Customer</th>
                        <th>Customer RFQ No</th>
                        <th>Customer Contact</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {Object.values(rfqs).map((rfq, index) => (
                        <tr key={index}>
                            <td>{rfq._id}</td>
                            <td>{customers[rfq.customer]?.customer}</td>
                            <td>{rfq.customerRFQNo}</td>
                            <td>{rfq.customerContact}</td>
                            {/* Add more table cells for additional RFQ properties */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerRFQ;