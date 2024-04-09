import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchRFQs } from "../../store/customerrfq";


function CustomerRFQ() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRFQs())
    }, [dispatch])


    return (
        <>
            Test
        </>
    );
}

export default CustomerRFQ;