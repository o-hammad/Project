import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRFQs } from "../../store/customerrfq";
import './CustomerRFQ.css';


function CustomerRFQ() {
    const dispatch = useDispatch();
    const rfqs = useSelector(state => state.customerrfqs)

    useEffect(() => {
        dispatch(fetchRFQs())
    }, [dispatch])

    let rfqList = Object.values(rfqs)

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
                            <td>{rfq.customer}</td>
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