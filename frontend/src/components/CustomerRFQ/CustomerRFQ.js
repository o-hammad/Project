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
        <>
            {rfqList.map((rfq) => {
                return (
                    <div className="customer-rfq">
                        <div>{rfq._id}</div>
                        <div>{rfq.customer}</div>
                        <div>{rfq.customerRFQNo}</div>
                        <div>{rfq.customerContact}</div>
                    </div>
                )
            })}
        </>
    );
}

export default CustomerRFQ;