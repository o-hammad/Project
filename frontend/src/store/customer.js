import jwtFetch from './jwt';

const RECEIVE_CUSTOMERS = 'customer/RECEIVE_CUSTOMERS';
// const RECEIVE_RFQ = 'customerrfq/RECEIVE_RFQ';
// const REMOVE_RFQ = 'customerrfq/REMOVE_RFQ';

export const receiveCustomers = customers => {
    return {
        type: RECEIVE_CUSTOMERS,
        customers
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
    if (state.customers) return (state.customers);
    return [];
}

// export const getRFQ = rfqId => {
//     return state => {
//         if (state.customerrfqs) return state.customerrfqs[rfqId];
//         return null;
//     }
// }
// Thunk action creators

export const fetchCustomers = () => async dispatch => {
    const res = await jwtFetch('/api/customers/')
    if (res.ok) {
        const customers = await res.json();
        dispatch(receiveCustomers(customers));
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

const customerReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CUSTOMERS:
            return { ...action.customers };
        // case RECEIVE_RFQ:
        //     return { ...nextState, ...action.customerrfq.customerrfqs }
        // case REMOVE_RFQ:
        //     delete nextState[action.rfqId]
        //     return nextState
        default:
            return state;
    }
}

export default customerReducer;