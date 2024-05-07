import jwtFetch from './jwt';

const RECEIVE_CUSTOMER_CONTACTS = 'customer/RECEIVE_CUSTOMER_CONTACTS';
// const RECEIVE_RFQ = 'customerrfq/RECEIVE_RFQ';
// const REMOVE_RFQ = 'customerrfq/REMOVE_RFQ';

export const receiveCustomerContacts = customerContact => {
    return {
        type: RECEIVE_CUSTOMER_CONTACTS,
        customerContact
    }
}

// export const receiveRFQ = rfq => {
//     return {
//         type: RECEIVE_RFQ,
//         rfq
//     }
// }

// export const removeRFQ = rfqId => {
//     return {
//         type: REMOVE_RFQ,
//         rfqId
//     }
// }

// useSelectors
export const getCustomers = state => {
    if (state.customercontacts) return (state.customercontacts);
    return [];
}

// export const getRFQ = rfqId => {
//     return state => {
//         if (state.customerrfqs) return state.customerrfqs[rfqId];
//         return null;
//     }
// }
// Thunk action creators

export const fetchCustomerContacts = () => async dispatch => {
    const res = await jwtFetch('/api/customercontacts/')
    if (res.ok) {
        const customerContacts = await res.json();
        dispatch(receiveCustomerContacts(customerContacts));
        return res
    }
}

// export const fetchRFQ = rfqId => async dispatch => {
//     const res = await jwtFetch(`/api/customerrfqs/${rfqId}`);

//     if (res.ok) {
//         const rfq = await res.json();
//         dispatch(receiveRFQ(rfq));
//     }
// }

// export const createRFQ = rfq => async dispatch => {
//     const res = await jwtFetch(`/api/customerrfqs/create`, {
//         method: "POST",
//         body: JSON.stringify(rfq)
//     });

//     if (res.ok) {
//         const rfq = await res.json();
//         dispatch(receiveRFQ(rfq));
//         return res
//     }
// }

// export const updateRFQ = (rfqId, response) => async dispatch => {
//     const res = await jwtFetch(`/api/customerrfqs/${rfqId}`, {
//         method: "PATCH",
//         body: JSON.stringify(response)
//     });

//     if (res.ok) {
//         const rfq = await res.json();
//         dispatch(receiveRFQ(rfq));
//         return res
//     }
// }

// export const deleteRFQ = rfqId => async dispatch => {
//     const res = await jwtFetch(`/api/customerrfqs/${rfqId}`, {
//         method: 'DELETE'
//     });

//     if (res.ok) {
//         dispatch(removeRFQ(rfqId));
//     }
// }

// Reducer

const customerContactReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CUSTOMER_CONTACTS:
            return { ...action.customerContact };
        // case RECEIVE_RFQ:
        //     return { ...nextState, ...action.customerrfq.customerrfqs }
        // case REMOVE_RFQ:
        //     delete nextState[action.rfqId]
        //     return nextState
        default:
            return state;
    }
}

export default customerContactReducer;