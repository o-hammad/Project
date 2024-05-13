import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRFQs } from "../../store/customerrfq";
import './CustomerRFQ.css';
import { fetchCustomers } from "../../store/customer";
import { fetchCustomerContacts } from "../../store/customercontact";
import Modal from 'react-modal';
import RFQFormModal from "./RFQFormModal";


function CustomerRFQ() {
    const dispatch = useDispatch();
    const rfqs = useSelector(state => state.customerrfqs);
    const customers = useSelector(state => state.customers);
    const customerContacts = useSelector(state => state.customercontacts);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchRFQs());
        dispatch(fetchCustomers());
        dispatch(fetchCustomerContacts())
    }, [dispatch])

    let rfqList = Object.values(rfqs);
    let customerList = Object.values(customers);
    let customerContactList = Object.values(customerContacts);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="customer-rfq-table-container">
            <button onClick={openModal}>Create RFQ</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false} // Disable ariaHideApp warning
            >
                <button onClick={closeModal}>Close Modal</button>

                {/* Render your modal form component */}
                <RFQFormModal closeModal={closeModal} />
            </Modal>
            
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
            {/* Test Code for Hover Effect*/}
            <h1>Test</h1>
                <a>Test Drop Down</a>
            <div className="Test">Dropdown</div>
        </div>
    );
}

export default CustomerRFQ;