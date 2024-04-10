import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRFQs } from "../../store/customerrfq";


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
                    <div>{rfq._id}</div>
                )
            })}
        </>
    );
}

export default CustomerRFQ;