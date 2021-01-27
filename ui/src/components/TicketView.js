import React, { useState, useEffect } from 'react';
import Header from './Header';
// import * as api from '../../../api'

// import { useDispatch, useSelector } from 'react-redux'

const TicketView = (ticket) => {
    console.log(ticket.value)
    const renderBuyBtn = () => {
        if (ticket.value.available){
            return (
                <button>Purchase</button>
            )
        }else{
            return (
                <button>Unavailable</button>
            )
        }
    }
    return (
        <div>
            <h1>{ticket.value.title}</h1>
            <p>{ticket.value.price}</p>
            <p>{renderBuyBtn()}</p>
        </div>
    )
}

export default TicketView;