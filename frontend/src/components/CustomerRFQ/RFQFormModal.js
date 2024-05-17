import React, { useState, useEffect } from 'react';
import './CustomerRFQ.css';

function RFQFormModal({ closeModal, customers, customerContacts }) {
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedContact, setSelectedContact] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [contactEmails, setContactEmails] = useState([]);
    const [rfqData, setRfqData] = useState({
        customer: '',
        customerRFQNo: '',
        customerContact: '',
        receiptDate: '',
        shippingTerms: '',
        parts: []
    });

    useEffect(() => {
        if (selectedCustomer) {
            setFilteredContacts(
                Object.values(customerContacts).filter(contact => contact.customerId === selectedCustomer)
            );
            setSelectedContact('');
        } else {
            setFilteredContacts([]);
            setContactEmails([]);
        }
    }, [selectedCustomer, customerContacts]);

    useEffect(() => {
        if (selectedContact) {
            setContactEmails(
                filteredContacts.filter(contact => contact._id === selectedContact)
            );
        } else {
            setContactEmails([]);
        }
    }, [selectedContact, filteredContacts]);

    const handleCustomerChange = (event) => {
        setSelectedCustomer(event.target.value);
        setRfqData({ ...rfqData, customer: event.target.value });
    };

    const handleContactChange = (event) => {
        setSelectedContact(event.target.value);
        setRfqData({ ...rfqData, customerContact: event.target.value });
    };

    const handleChange = (event) => {
        setRfqData({ ...rfqData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/customerrfqs/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rfqData),
            });

            if (response.ok) {
                const newRfq = await response.json();
                console.log('New RFQ created:', newRfq);
                closeModal();
            } else {
                console.error('Failed to create RFQ');
            }
        } catch (error) {
            console.error('Error creating RFQ:', error);
        }
    };

    return (
        <div className="rfq-form-modal">
            <form onSubmit={handleSubmit}>
                <label>
                    Customer
                    <select name="customer" value={selectedCustomer} onChange={handleCustomerChange}>
                        <option value="">Select Customer</option>
                        {Object.values(customers).map(customer => (
                            <option key={customer._id} value={customer._id}>
                                {customer.customer}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Customer Contact
                    <select name="customerContact" value={selectedContact} onChange={handleContactChange}>
                        <option value="">Select Contact</option>
                        {filteredContacts.map(contact => (
                            <option key={contact._id} value={contact._id}>
                                {contact.contactName}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Contact Email
                    <select name="contactEmail" value={rfqData.contactEmail} onChange={handleChange}>
                        <option value="">Select Contact Email</option>
                        {contactEmails.map(contact => (
                            <option key={contact._id} value={contact.contactEmail}>
                                {contact.contactEmail}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    RFQ Number
                    <input type="text" name="customerRFQNo" value={rfqData.customerRFQNo} onChange={handleChange} placeholder="Enter RFQ number" />
                </label>
                <label>
                    Receipt Date
                    <input type="date" name="receiptDate" value={rfqData.receiptDate} onChange={handleChange} />
                </label>
                <label>
                    Shipping Terms
                    <input type="text" name="shippingTerms" value={rfqData.shippingTerms} onChange={handleChange} />
                </label>
                <label>
                    Parts
                    <input type="text" name="parts" value={rfqData.parts} onChange={handleChange} placeholder="Enter parts (comma separated)" />
                </label>
                <div className="form-buttons">
                    <button type="button" onClick={closeModal}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RFQFormModal;